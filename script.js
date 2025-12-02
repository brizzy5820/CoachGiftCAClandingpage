   
    // Countdown Timer
    let timeLeft = 24 * 60 * 60;
    const countdownElements =   document.getElementById('countdown2');
        setInterval(() => {
      timeLeft--;
      const h = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
      const m = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
      const s = String(timeLeft % 60).padStart(2, '0');

      countdownElements.textContent = `${h}:${m}:${s}`;

      if (timeLeft <= 0) countdownElements.textContent = "EXPIRED!";
    }, 1000);