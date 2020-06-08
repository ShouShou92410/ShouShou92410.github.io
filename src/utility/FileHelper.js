function hasFileExtension(file, desiredExtension) {
  return (
    file.name
      .split('.')
      .pop()
      .toLowerCase() === desiredExtension.toLowerCase()
  );
}

function readFile(file) {
  let fr = new FileReader();

  return new Promise((resolve, reject) => {
    fr.onerror = () => {
      fr.abort();
      reject('Error occurs when trying to read the csv file.');
    };

    fr.onload = (e) => {
      resolve(e.target.result);
    };

    fr.readAsText(file);
  });
}

function CSVtoJSON(csvFile) {
  return new Promise((resolve, reject) => {
    readFile(csvFile)
      .then((readResult) => {
        let fileContent = readResult.split('\n');
        fileContent.pop(); //Remove last line break

        fileContent = fileContent.map((x) => x.split(','));

        let keys = fileContent.shift().map((key) => key.trim().toLowerCase()); //Remove first element, which is an array of keys
        if (keys.length === [...new Set(keys)].length) {
          const jsonResult = fileContent.map((row) => {
            let rowObject = {};

            keys.forEach((key, index) => {
              rowObject[key] = row[index].trim();
            });

            return rowObject;
          });

          resolve(jsonResult);
        } else {
          alert('keys are not unique.');
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default {
  hasFileExtension: hasFileExtension,
  CSVtoJSON: CSVtoJSON
};
