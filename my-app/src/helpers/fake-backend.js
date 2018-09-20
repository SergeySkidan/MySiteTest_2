// Регистрация пользователей в  localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];

export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // симуляция задержки ответа сервера
            setTimeout(() => {
                // аунтификация
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // получение параметров из post request
                    let params = JSON.parse(opts.body);
                    // поиск юзеров
                    let filteredUsers = users.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });
                    if (filteredUsers.length) {
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'fake-jwt-token'
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        reject('Username or password is incorrect');
                    }
                    return;
                }
                // получение юзеров
                if (url.endsWith('/users') && opts.method === 'GET') {
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users))});
                    } else {
                        // возврат 401 ошибки если null или invalid
                        reject('Unauthorised');
                    }
                    return;
                }
                // получить user по id
                if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
                  // проверить токен аутентификации в заголовке и вернуть пользователя, если он действителен
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // поиск user по id в users array
                        let urlParts = url.split('/accountPage');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        let matchedUsers = users.filter(user => { return user.id === id; });
                        let user = matchedUsers.length ? matchedUsers[0] : null;
                        // ответ 200 OK с user
                        resolve({ ok: true, text: () => JSON.stringify(user)});
                    } else {
                        // ответ 401 не разрешено, если токен имеет значение null или недействителен
                        reject('Unauthorised');
                    }
                    return;
                }
                // регистрация user
                if (url.endsWith('/users/register') && opts.method === 'POST') {
                    // получить new user object из post body
                    let newUser = JSON.parse(opts.body);
                    // валидация
                    let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                    if (duplicateUser) {
                        reject('Username "' + newUser.username + '" is already taken');
                        return;
                    }
                    // сохранение new user
                    newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));
                    // 200 OK
                    resolve({ ok: true, text: () => Promise.resolve() });
                    return;
                }

                //удаление user
                if (url.match(/\/users\/\d+$/) && opts.method === 'DELETE') {
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        let urlParts = url.split('/accountPage');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        for (let i = 0; i < users.length; i++) {
                            let user = users[i];
                            if (user.id === id) {
                                users.splice(i, 1);
                                localStorage.setItem('users', JSON.stringify(users));
                                break;
                            }
                        }
                        resolve({ ok: true, text: () => Promise.resolve() });
                    } else {
                        reject('Unauthorised');
                    }
                    return;
                }

                realFetch(url, opts).then(response => resolve(response));
            }, 500);
        });
    }
}
