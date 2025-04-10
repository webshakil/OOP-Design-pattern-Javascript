// Step 1: Define an Interface for Users
interface User {
  name: string;
  role: string;
  permissions(): string;
}

// Step 2: Implement Different User Types
class Admin implements User {
  name: string;
  role = "Admin";

  constructor(name: string) {
    this.name = name;
  }

  permissions() {
    return "Full Access";
  }
}

class Customer implements User {
  name: string;
  role = "Customer";

  constructor(name: string) {
    this.name = name;
  }

  permissions() {
    return "Limited Access to Purchases";
  }
}

class Guest implements User {
  name: string;
  role = "Guest";

  constructor(name: string) {
    this.name = name;
  }

  permissions() {
    return "Read-Only Access";
  }
}

// Step 3: Create a Factory Class to Generate User Objects
class UserFactory {
  static createUser(type: string, name: string): User {
    switch (type) {
      case "admin":
        return new Admin(name);
      case "customer":
        return new Customer(name);
      case "guest":
        return new Guest(name);
      default:
        throw new Error("Invalid user type");
    }
  }
}

// Step 4: Usage Example
const adminUser = UserFactory.createUser("admin", "Alice");
const customerUser = UserFactory.createUser("customer", "Bob");
const guestUser = UserFactory.createUser("guest", "Charlie");

console.log(adminUser.name, adminUser.role, adminUser.permissions()); // Alice Admin Full Access
console.log(customerUser.name, customerUser.role, customerUser.permissions()); // Bob Customer Limited Access to Purchases
console.log(guestUser.name, guestUser.role, guestUser.permissions()); // Charlie Guest Read-Only Access
