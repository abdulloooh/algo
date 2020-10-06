/*
    Display all string properties of an input object
*/

function stringProperties(object) {
  for (let key in object)
    if (typeof object[key] === "string") console.log(key, object[key]);
}

const book = {
  title: "Quran",
  verses: 6666,
  author: "Allah",
  chapters: 114,
  revealed: true,
};

stringProperties(book);
