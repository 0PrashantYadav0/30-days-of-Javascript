const solvedPromise = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve("time out end");
  }, 2000)
})

const errorPromise = new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error('Something went wrong!'));
  }, 2000);
});

errorPromise
  .then((result) => {
    console.log('Promise resolved:', result);
  })
  .catch((error) => {
    console.error('Promise rejected:', error.message);
  });
solvedPromise
  .then((result) => {
    console.log('Promise resolved:', result);
  })
  .catch((error) => {
    console.error('Promise rejected:', error.message);
  });



// Simulate a server request with a promise that resolves after a delay
const fetchData = (data, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

// Chain the promises to log messages in a specific order
fetchData('Fetching user data...', 1000)
  .then((message) => {
    console.log(message);
    return fetchData('Fetching posts...', 2000);
  })
  .then((message) => {
    console.log(message);
    return fetchData('Fetching comments...', 1500);
  })
  .then((message) => {
    console.log(message);
    console.log('All data fetched successfully!');
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });


async function resolvePromise(){
  const res = await fetchData('Fetching user data...', 1000)
  console.log(res)
  console.log("All data fetched.")
}

async function resolvePromiseWithError(){
  try {
    console.log("Solving error promise")
    const res = await errorPromise;
    console.log(res)
  } catch (error) {
    console.log(error.message)
  }
}

resolvePromise();
resolvePromiseWithError();


const fetchingData = () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => {
      res.json()
        .then((data) => {
          console.log(data)
        })
    })
    .catch((err) => {
      console.log(err.message)
    })
}

const fetchingDataWithAwait = async () => {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await res.json();
  console.log(data)
}

fetchingData();
fetchingDataWithAwait();


const promise1 = fetchData('User data', 2000);
const promise2 = fetchData('Posts data', 5000);
const promise3 = fetchData('Comments data', 1500);

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log('All data fetched:', values);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });


Promise.race([promise1, promise2, promise3])
.then((value) => {
  console.log('First data fetched:', value);
})
.catch((error) => {
  console.error('Error fetching data:', error);
});