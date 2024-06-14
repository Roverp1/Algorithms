<div align="center">

| Algorytmy i złożoność | laboratorium |
|-----------------------|--------------|
| SAN                   |              |
| Autor                 | Yaroslav Zubiakha |
| E-mail                | 121546@student.san.edu.pl / yar.zubaha@proton.me |
| Nr albumu             | 121546       |
| Data                  | 14.06.2024   |
| Wersja                | 1.0          |

<br>

# **Zadanie nr 10** 

</div>

<br>

> ## Opis zadania
Zaimplementować własny stos lub kolejkę i zademonstrować działanie jego metod: dodawania oraz usuwania elementów.

Na ocenę 5 praca powinna zawierać:
- Metody:
    - Push
    - Pop
    - isEmpty
    - size.
- Własny kod kolejki lub stosu.
- Przebieg obliczeń: demonstracja działania metod.

<br>

> ## Kod algorytmu
Located in directories: `./queue/` and `./stack/`

<br>

> ## Przebieg obliczeń

Homework contains two small programs that utilise Queue and Stack that I built while following codecademy courses.

### For Queue:  

In file `./queue/Queue.js` located Queue data structure, that contains following methods:  
- `isEmpty` that returns boolean `true` if `Queue` is empty;  
- `hasRoom` that return boolean `true` if size of `Queue` less than it's maximum size, i.e. there is room push elements;  
- `enqueue` checks if `Queue` has room, and if it does, it adds a new element to the `Queue` utilizing LinkedList's method `addToTail`, and throws an error otherwise;  
- `dequeue` checks if `Queue` is not empty, and if it is, it deletes first element from the `Queue`, utilizing LinkedList's `removeHead` method, and throws an error otherwise;  
- property `size`, shows the size of the `Queue`;<br>  

In file `./queue/runway.js` located program that will help the air traffic control move planes to the runway and allow those planes to take off in a FIFO order.
Here is the sequential overview of program's calculations:
1. Initialize a new `Queue` with a capacity of 3 to represent the runway.
2. Iterate over the array of flights.
3. For each flight:
   - Attempt to enqueue the flight onto the runway.
   - If successful, log the message: "[Flight] taxi to runway."
   - If the runway is full (queue capacity reached), catch the error and log the message: "Runway full!"
4. Return the runway queue filled with the flights that were enqueued.

5. To clear the runway for takeoff:
   - While the runway queue is not empty:
     - Dequeue a flight from the runway.
     - Log the message: "\nFlights wait...\n"
     - Log the message: "[Cleared flight], is cleared for takeoff!\n[Cleared flight] in air."
   - Once the runway queue is empty, log the message: "\nAll planes took off, runway clear."

6. Create an array of flight strings representing the flights ready for departure.
7. Call the `load` function with the array of flights to enqueue them onto the runway.
8. Call the `clear` function with the runway queue to clear each plane for takeoff.<br>

![runway.js output](./pics/runway_output.png)<br>

### For Stack:

