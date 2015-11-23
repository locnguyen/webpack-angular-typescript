module session {
    export interface User {
        email: string;
        password: string;
    }

    export interface ISession {
        create(user: User):ng.IPromise<User>;
    }

    export class SessionService implements ISession {

        static $inject = ['$q'];

        constructor(private $q:ng.IQService) {
        }

        create(user:User):ng.IPromise<User>{
            alert(`${user.email} is signed in!`);

            return this.$q.when(user);
        }
    }
}

export = session;
