async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Unable to fetch data:", error);
  }
}

function fetchNames(nameType: string) {
  return fetchData(`https://www.randomlists.com/data/names-${nameType}.json`);
}

function pickRandom(list: string[]) {
  return list[Math.floor(Math.random() * list.length)];
}

const generateName = async (gender: string) => {
  try {
    const response = await Promise.all([
      fetchNames(gender || pickRandom(["male", "female"])),
      fetchNames("surnames"),
    ]);

    const [firstNames, lastNames] = response;

    const firstName = pickRandom(firstNames.data);
    const lastName = pickRandom(lastNames.data);

    return `${firstName} ${lastName}`;
  } catch (error) {
    console.error("Unable to generate name:", error);
  }
};

export default generateName;
