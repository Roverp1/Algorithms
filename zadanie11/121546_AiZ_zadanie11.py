from threading import Thread, Lock

# Shared variable and mutex for thread synchronization
shared_num = 1
mutex = Lock()


def process_data(new_value: int):
    global shared_num
    # Acquire the lock to ensure exclusive access to shared_num
    mutex.acquire()
    shared_num = new_value
    print(f'shared_num = {shared_num}')
    # Release the lock after updating the shared variable
    mutex.release()


# Create threads to run the process_data function with different arguments
thread1 = Thread(target=process_data, args=(1,))
thread2 = Thread(target=process_data, args=(2,))

# Start the threads
thread1.start()
thread2.start()

# Wait for both threads to finish
thread1.join()
thread2.join()


# Test to demonstrate the effect of concurrent execution
def test_threads():
    global shared_num
    # Reset the shared variable
    shared_num = 0

    # Define a new set of threads with different arguments
    thread3 = Thread(target=process_data, args=(3,))
    thread4 = Thread(target=process_data, args=(4,))
    thread5 = Thread(target=process_data, args=(5,))

    # Start the threads
    thread3.start()
    thread4.start()
    thread5.start()

    # Wait for all threads to finish
    thread3.join()
    thread4.join()
    thread5.join()

    # Print the final value of shared_num
    print(f'Final value of shared_num: {shared_num}')


# Run the test
test_threads()
