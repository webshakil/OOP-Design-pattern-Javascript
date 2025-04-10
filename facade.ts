// Subsystems (Complex Components)
class Amplifier {
    turnOn() { console.log("Amplifier is ON"); }
    turnOff() { console.log("Amplifier is OFF"); }
}

class DVDPlayer {
    play(movie: string) { console.log(`Playing movie: ${movie}`); }
    stop() { console.log("DVD stopped"); }
}

class Projector {
    turnOn() { console.log("Projector is ON"); }
    turnOff() { console.log("Projector is OFF"); }
}

// 🎯 FACADE CLASS
class HomeTheaterFacade {
    private amp: Amplifier;
    private dvd: DVDPlayer;
    private projector: Projector;

    constructor() {
        this.amp = new Amplifier();
        this.dvd = new DVDPlayer();
        this.projector = new Projector();
    }

    watchMovie(movie: string) {
        console.log("\n🎬 Starting movie night...");
        this.amp.turnOn();
        this.projector.turnOn();
        this.dvd.play(movie);
    }

    endMovie() {
        console.log("\n🛑 Shutting down...");
        this.dvd.stop();
        this.projector.turnOff();
        this.amp.turnOff();
    }
}

// ✅ Usage
const homeTheater = new HomeTheaterFacade();
homeTheater.watchMovie("Inception");
homeTheater.endMovie();
