# 🏠 Smart Home Dashboard (Arduino + Web Interface)

A simple **Smart Home Dashboard** that allows you to control appliances (LED, Fan) and monitor live temperature and humidity — built using **Arduino** and a basic HTML/JS frontend.

---

## 🚀 Features
- 🌡️ Real-time temperature & humidity display  
- 💡 Toggle switch for LED control  
- 🌀 Fan ON/OFF control  
- 🧠 Responsive and minimal dashboard design  
- 🔗 Works perfectly with Arduino + Serial Monitor  

---

## 🛠️ Tech Stack
| Component | Technology |
|------------|-------------|
| Frontend | HTML, CSS, JavaScript |
| Hardware | Arduino UNO (or Nano) |
| Sensors | DHT11 / DHT22 |
| Communication | Serial Data via USB |

---

## ⚙️ Setup Guide

### 🧩 1. Arduino
1. Connect DHT11 sensor (VCC → 5V, GND → GND, Data → Pin 2).  
2. Connect an LED on Pin 8 and Fan (or Motor with transistor) on Pin 9.  
3. Upload the provided Arduino code using the Arduino IDE.  
4. Open Serial Monitor at **9600 baud rate** to see readings.

### 💻 2. Web Dashboard
1. Open `index.html` in any browser, or  
2. Visit the live version hosted on **GitHub Pages**:  
   👉 [https://YOURUSERNAME.github.io/smart-home-dashboard/](https://YOURUSERNAME.github.io/smart-home-dashboard/)  
   *(replace YOURUSERNAME with your GitHub ID)*  

---

## 🧠 How It Works
- The web dashboard interacts with Arduino via serial data.
- When you click “LED ON/OFF” or “Fan ON/OFF”, it sends signals to the Arduino.  
- Arduino reads those signals and triggers corresponding pins.  
- The dashboard fetches temperature and humidity from Arduino serial output in real time.

---

## 📸 Screenshots
(Add screenshots here once your dashboard is live)  
Example:

---

## 👨‍💻 Author
**Md Zulquarnain Ansari**  
- 💼 Electrical Engineering Student  
- 🔗 [GitHub Profile](https://github.com/YOURUSERNAME)  
- 🌐 [Project Page](https://YOURUSERNAME.github.io/smart-home-dashboard/)  
- 📱 Instagram: [_.mohd.zulquar._](https://www.instagram.com/_.mohd.zulquar._?igsh=MWh2M3h5dDNnNnQ0cw==)

---

## 🧾 License
This project is open-source under the **MIT License** — free to use and modify.

---

⭐ **If you like this project, give it a star on GitHub!**
