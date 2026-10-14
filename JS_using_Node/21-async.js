// await can only be used with in async function
const {readFile, writeFile} = require("fs/promises");
const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile(
      './content/result.txt',
      `Result:\n ${first} ${second}`,
      { flag: 'w' }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start();