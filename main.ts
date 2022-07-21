const test = (file: Blob) => {

    console.log(file);

}

const file = new File(["foo"], "foo.txt", {
    type: "text/plain",
});
  
test(file)