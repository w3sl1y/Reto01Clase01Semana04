const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!isKayoSick) {
          resolve(2);
        } else {
          reject(new Error("Estoy triste"));
        }
      }, 2000);
    });
  };

  onMyBirthday(false)
  .then((result) => {
    console.log(`Tengo ${result} pasteles`);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Fiesta");
  });

  onMyBirthday(true)
  .then((result) => {
    console.log(`Tengo ${result} pasteles`);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Fiesta");
  });