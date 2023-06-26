const docRef = firestore.collection("accounts").doc(id);
const doc = await docRef.get();

if (!doc.exists) {
  res.status(404).send("Account not found");
} else {
  const monsters = doc.data().monsters || {};
  if (!monsters[mid]) {
    res.status(404).send("monster not found");
  } else {
    delete monsters[mid];
    await docRef.update({monsters});
    res.send("Monster deleted successfully");
  }
}

const docRef = firestore.collection("accounts").doc(id);
const doc = await docRef.get();

if (!doc.exists) {
  res.status(404).send("Account not found");
} else {
  const monsters = doc.data().monsters || {};
  if (!monsters[mid]) {
    res.status(404).send("monster not found");
  } else {
    delete monsters[mid];
    await docRef.update({monsters});
    res.send("Monster deleted successfully");
  }
}
const docRef = firestore.collection("accounts").doc(id);
const doc = await docRef.get();

if (!doc.exists) {
  res.status(404).send("Account not found");
} else {
  const monsters = doc.data().monsters || {};
  if (!monsters[mid]) {
    res.status(404).send("monster not found");
  } else {
    delete monsters[mid];
    await docRef.update({monsters});
    res.send("Monster deleted successfully");
  }
}
const docRef = firestore.collection("accounts").doc(id);
const doc = await docRef.get();

if (!doc.exists) {
  res.status(404).send("Account not found");
} else {
  const monsters = doc.data().monsters || {};
  if (!monsters[mid]) {
    res.status(404).send("monster not found");
  } else {
    delete monsters[mid];
    await docRef.update({monsters});
    res.send("Monster deleted successfully");
  }
}
const docRef = firestore.collection("accounts").doc(id);
const doc = await docRef.get();

if (!doc.exists) {
  res.status(404).send("Account not found");
} else {
  const monsters = doc.data().monsters || {};
  if (!monsters[mid]) {
    res.status(404).send("monster not found");
  } else {
    delete monsters[mid];
    await docRef.update({monsters});
    res.send("Monster deleted successfully");
  }
}


const docRef = firestore.collection("accounts").doc(id);
const doc = await docRef.get();

if (!doc.exists) {
  res.status(404).send("Account not found");
} else {
  const monsters = doc.data().monsters || {};
  if (!monsters[mid]) {
    res.status(404).send("monster not found");
  } else {
    delete monsters[mid];
    await docRef.update({monsters});
    res.send("Monster deleted successfully");
  }
}




