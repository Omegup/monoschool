app.put("/accounts/:mid/upgrade_monster", validateFirebaseIdToken, async (req, res) => {
  try {
    const mid = req.params.mid;
    const id = req.user.uid;

    const userRef = firestore.collection("accounts").doc(id);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return res.status(404).send(`No user found with ID ${id}`);
    }

    const  gold = userDoc.data().resources.gold;
    const  essence = userDoc.data().resources.essence;
    const { lvl , rarity } = userDoc.data().monsters[mid];
    const puiss = 2 ** lvl;
    const goldUpgrade = userDoc.data().monsters[mid].goldUpgrade * puiss;

    const maxLevels = {
      common: 50,
      rare: 80,
      epic: 100,
      legendary: 130,
    };

    const maxLevel = maxLevels[rarity];

    if (lvl >= maxLevel) {
      return res.status(400).send("Monster has reached maximum level");
    }

    if (gold < goldUpgrade) {
      return res.status(400).send("Not enough resources to upgrade monster");
    }

    let essenceCost = 0;

    if (lvl % 5 === 0) {
      essenceCost = lvl * 2;
      if (essence < essenceCost) {
        return res.status(400).send("Not enough essence to upgrade monster");
      }
    }

    const dataToUpdate = {
      "resources.gold": gold - goldUpgrade,
      "resources.essence": essence - essenceCost,
      [`monsters.${mid}.lvl`]: lvl + 1,

    };

    await userRef.update(dataToUpdate);
    res.send("Monster upgraded!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});




app.put("/accounts/:mid/upgrade_monster", validateFirebaseIdToken, async (req, res) => {
  try {
    const tif = req.params.tif;
    const id = req.user.uid;

    const userRef = firestore.collection("accounts").doc(id);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return res.status(404).send(`No user found with ID ${id}`);
    }

    const  gold = userDoc.data().resources.gold;
    const  essence = userDoc.data().resources.essence;
    const { lvl , rarity } = userDoc.data().monsters[tif];
    const puiss = 2 ** lvl;
    const goldUpgrade = userDoc.data().monsters[tif].goldUpgrade * puiss;

    const maxLevels = {
      common: 50,
      rare: 80,
      epic: 100,
      legendary: 130,
    };

    const maxLevel = maxLevels[rarity];

    if (lvl >= maxLevel) {
      return res.status(400).send("Monster has reached maximum level");
    }

    if (gold < goldUpgrade) {
      return res.status(400).send("Not enough resources to upgrade monster");
    }

    let essenceCost = 0;

    if (lvl % 5 === 0) {
      essenceCost = lvl * 2;
      if (essence < essenceCost) {
        return res.status(400).send("Not enough essence to upgrade monster");
      }
    }

    const dataToUpdate = {
      "resources.gold": gold - goldUpgrade,
      "resources.essence": essence - essenceCost,
      [`monsters.${tif}.lvl`]: lvl + 1,

    };

    await userRef.update(dataToUpdate);
    res.send("Monster upgraded!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});
