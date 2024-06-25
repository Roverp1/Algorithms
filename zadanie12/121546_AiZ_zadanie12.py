import threading
import time
import random

# Number of philosophers (and forks)
num_philosophers = 5

# Forks represented by threading Locks
forks = [threading.Lock() for _ in range(num_philosophers)]


def philosopher(philosopher_id):
    for _ in range(2):  # Each philosopher will execute the task twice
        print(f"Philosopher {philosopher_id} is thinking.")
        time.sleep(random.uniform(1, 3))  # Simulate thinking

        # Pick up the left fork
        left_fork = philosopher_id
        right_fork = (philosopher_id + 1) % num_philosophers

        print(f"Philosopher {philosopher_id} is hungry.")
        with forks[left_fork]:  # Acquire the left fork
            print(f"Philosopher {philosopher_id} picked up left fork {left_fork}.")
            with forks[right_fork]:  # Acquire the right fork
                print(f"Philosopher {philosopher_id} picked up right fork {right_fork} and starts eating.")
                time.sleep(random.uniform(1, 2))  # Simulate eating
                print(f"Philosopher {philosopher_id} has finished eating and put down forks {left_fork} and {right_fork}.")

        print(f"Philosopher {philosopher_id} is done thinking and eating.")


# Create and start philosopher threads
threads = []
for i in range(num_philosophers):
    thread = threading.Thread(target=philosopher, args=(i,))
    threads.append(thread)
    thread.start()

# Wait for all threads to complete
for thread in threads:
    thread.join()

print("All philosophers have finished their tasks.")
