class Database{
    private static instace:Database;

    private constructor(){
        console.log("Database connection established!");
    }

    public static getInstance():Database{
        if(!Database.instace){
            Database.instace = new Database();
        }
        return Database.instace;
    }

    public query(sql:string):void{
        console.log(`Executing SQL: ${sql}`);
    }
}
const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log("db1", db1);
console.log("db2", db2)

db1.query("SELECT * FROM users");

console.log(db1 === db2);//true






































// class Database {
//     // A static property to hold the single instance of the Database class
//     private static instance: Database;
  
//     // Private constructor prevents direct instantiation from outside the class
//     private constructor() {
//       console.log("Database connection established!"); 
//       // This message appears only once, proving only one instance is created.
//     }
  
//     // Public static method to get the single instance of the Database class
//     public static getInstance(): Database {
//       if (!Database.instance) { 
//         // If no instance exists, create a new one
//         Database.instance = new Database();
//       }
//       return Database.instance; 
//       // If an instance already exists, return the existing one
//     }
  
//     // A method to simulate executing a SQL query
//     public query(sql: string): void {
//       console.log(`Executing SQL: ${sql}`);
//     }
//   }
  
//   // Usage of Singleton
//   const db1 = Database.getInstance(); // First call → Creates the instance
//   const db2 = Database.getInstance(); // Second call → Returns the same instance
  
//   db1.query("SELECT * FROM users"); // Executes query using the single database instance
  
//   console.log(db1 === db2); 
//   // true → Confirms that both db1 and db2 refer to the same instance



// class Logger {
//     private static instance: Logger;
  
//     private constructor() {}
  
//     public static getInstance(): Logger {
//       if (!Logger.instance) {
//         Logger.instance = new Logger();
//       }
//       return Logger.instance;
//     }
  
//     public log(message: string): void {
//       console.log(`[LOG]: ${message}`);
//     }
//   }
  
//   // Usage
//   const logger1 = Logger.getInstance();
//   logger1.log("Application started");
  
//   const logger2 = Logger.getInstance();
//   logger2.log("User logged in");
  
//   console.log(logger1 === logger2); // true (same instance)
  
   
//Ensures consistent logging throughout the application.
//Avoids creating multiple logger instances, keeping logs centralized.



// class Config {
//     private static instance: Config;
//     private settings: Record<string, any> = {};
  
//     private constructor() {} // Private constructor to prevent direct instantiation
  
//     public static getInstance(): Config {
//       if (!Config.instance) {
//         Config.instance = new Config();
//       }
//       return Config.instance;
//     }
  
//     public set(key: string, value: any): void {
//       this.settings[key] = value;
//     }
  
//     public get(key: string): any {
//       return this.settings[key];
//     }
//   }
  
//   // Usage
//   const config1 = Config.getInstance();
//   config1.set("apiUrl", "https://api.example.com");
  
//   const config2 = Config.getInstance();
//   console.log(config2.get("apiUrl")); // Output: https://api.example.com
//   console.log(config1 === config2);   // true (same instance)
//Ensures there is only one source of truth for configurations.
//Prevents unnecessary duplication of settings.




// class UserSession {
//     private static instance: UserSession;
//     private user: { id: number; name: string } | null = null;
  
//     private constructor() {}
  
//     public static getInstance(): UserSession {
//       if (!UserSession.instance) {
//         UserSession.instance = new UserSession();
//       }
//       return UserSession.instance;
//     }
  
//     public login(user: { id: number; name: string }): void {
//       this.user = user;
//       console.log(`${user.name} logged in.`);
//     }
  
//     public getUser(): { id: number; name: string } | null {
//       return this.user;
//     }
//   }
  
//   // Usage
//   const session1 = UserSession.getInstance();
//   session1.login({ id: 1, name: "Alice" });
  
//   const session2 = UserSession.getInstance();
//   console.log(session2.getUser()); // Output: { id: 1, name: "Alice" }
  
//   console.log(session1 === session2); // true (same instance)
//Prevents multiple user session instances.
//Ensures one active session per user across the app.  

  
  
  