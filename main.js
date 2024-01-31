const objectArray = [];
const resultDiv = document.getElementById("result");

function addToObjectArray() {
  //Ta verdig fra input
  const inputValue = document.getElementById("textInput").value.trim();
  //Sjekk vis verdig er ikke en tomt string
  if (inputValue !== "") {
    objectArray.push({ value: inputValue });
    displayArray();
    document.getElementById("textInput").value = "";
  }
}

//display verdig og button når det lagres
function displayArray() {
  resultDiv.innerHTML = "";

  objectArray.forEach((obj, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = obj.value;

    const editButton = createButton("Edit", () => editItem(index));
    const deleteButton = createButton("Delete", () => deleteItem(index));

    listItem.append(editButton, deleteButton);

    resultDiv.append(listItem);
  });
}

//DRY button
function createButton(text, onClick) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}

function editItem(index) {
  const listItem = resultDiv.childNodes[index];

  const inputElement = createInputElement(objectArray[index].value);

  const saveButton = createButton("Save", () =>
    saveEdit(index, inputElement.value)
  );
  inputElement.addEventListener(
    "keyup",
    (event) => event.key === "Enter" && saveEdit(index, inputElement.value)
  );

  const cancelButton = createButton("Cancel", () => displayArray());

  listItem.innerHTML = "";
  listItem.append(inputElement, saveButton, cancelButton);
}

function createInputElement(value) {
  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.value = value;
  return inputElement;
}

function saveEdit(index, newValue) {
  objectArray[index].value = newValue;
  displayArray();
}

function deleteItem(index) {
  objectArray.splice(index, 1);
  displayArray();
}
