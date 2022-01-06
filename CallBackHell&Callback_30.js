// Callback Hell

// 1: 2s student roll number
// 2: 2s 2nd name and age
// 3: 2s gender

const getRollNo = () => {
  setTimeout(() => {
    console.log("Api getting roll number");
    let roll_NO = [1, 2, 3, 4, 5];
    console.log(roll_NO);
    setTimeout(
      (RollNumber) => {
        const bioData = {
          name: "vinod",
          age: 26,
        };
        console.log(`My Name is ${bioData.name} And My Age Is ${bioData.age}`)

        setTimeout((name) => {
            console.log(`Gender Of ${bioData.name} Male`)
        }, 2000 , bioData.name);

      },
      2000,
      roll_NO[1]
    );
  }, 2000);
};

getRollNo();
