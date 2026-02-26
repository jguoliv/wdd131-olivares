const character = {
    name: "Snortleblat",
    level: 5,
    health: 100,

    attacked: function () {

        if (this.health <= 0) {
            return;
        }

        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;

            const message = document.querySelector("#message");
            message.textContent = this.name + " has died!";
            message.style.display = "block";

            document.querySelector("#playAgainBtn").style.display = "block";
        }

        document.querySelector("#health").textContent = this.health;
    },

    levelUp: function () {
        if (this.health <= 0) {
            return;
        }

        this.level += 1;
        document.querySelector("#level").textContent = this.level;
    },

    reset: function () {
        this.health = 100;
        this.level = 5;

        document.querySelector("#health").textContent = this.health;
        document.querySelector("#level").textContent = this.level;

        document.querySelector("#message").style.display = "none";
        document.querySelector("#playAgainBtn").style.display = "none";
    }
};


document.querySelector("#attackBtn").addEventListener("click", function () {
    character.attacked();
});

document.querySelector("#levelBtn").addEventListener("click", function () {
    character.levelUp();
});

document.querySelector("#playAgainBtn").addEventListener("click", function () {
    character.reset();
});