export default class DataManager {
  static myInstance = null;
  currentUser = {};
  userID = "";
  collectionID = "";
  newLabel = "What Emotion Did You Feel?";
  newCollectionTitle = "Select A Collection";

  users = [
    {
      id: "user2",
      name: "Dwayne Johnson",
      email: "therock@gmail.com",
      password: "rock1234",
      image: require("../assets/theRock.jpeg"),
    },
    {
      id: "user1",
      name: "Cristiano Ronaldo",
      email: "cr7@gmail.com",
      password: "siuu1234",
      image: require("../assets/ronaldo.jpeg"),
    },
  ];

  currentEditMemory = {
    userID: "",
    id: 0,
    collection: "",
    title: "",
    message: "",
    label: "",
    favourite: false,
  };

  memoriesData = [
    {
      userID: "user2",
      id: 1,
      collection: "Personal",
      title: "First day on a set",
      message: "Today was my first day filming my blockbuster film",
      label: "Excited",
      favourite: true,
      date: "22-3-1978",
    },
    {
      userID: "user2",
      id: 2,
      collection: "Personal",
      title: "Business Venture",
      message: "Today I launched my very own brand of Tequila!",
      label: "Happy",
      favourite: true,
      date: "2-9-2018",
    },
    {
      userID: "user2",
      id: 3,
      collection: "Family",
      title: "Divorce",
      message: "We ended our marriage",
      label: "Sad",
      favourite: false,
      date: "12-3-2001",
    },
    {
      userID: "user2",
      id: 4,
      collection: "Family",
      title: "Birth",
      message: "We welcome our first baby into the world",
      label: "Happy",
      favourite: true,
      date: "23-4-2007",
    },
    {
      userID: "user2",
      id: 5,
      collection: "Friends",
      title: "Boys Trip",
      message: "Went to Vegas with my closest pals",
      label: "Excited",
      favourite: false,
      date: "11-11-2021",
    },
    {
      userID: "user2",
      id: 6,
      collection: "Friends",
      title: "Friend",
      message: "Met Vin Diesel, what a cool dude",
      label: "Happy",
      favourite: false,
      date: "1-12-2009",
    },
    {
      userID: "user1",
      id: 7,
      collection: "Friends",
      title: "Football",
      message:
        "Today I played footy with my best friends and I scored the most points (of course)",
      label: "Happy",
      favourite: true,
      date: "13-03-2012",
    },
    {
      userID: "user1",
      id: 8,
      collection: "Family",
      title: "Love",
      message: "I married Georgina",
      label: "Excited",
      favourite: true,
      date: "01-12-2018",
    },
    {
      userID: "user1",
      id: 9,
      collection: "Personal",
      title: "Siuu",
      message: "I yelled SIIUUU, the crowd went wild",
      label: "Happy",
      favourite: true,
      date: "7-4-2019",
    },
    {
      userID: "user1",
      id: 10,
      collection: "Personal",
      title: "Injury",
      message: "Yet another injury, going to rehab",
      label: "Sad",
      favourite: false,
      date: "1-8-2021",
    },
    {
      userID: "user1",
      id: 11,
      collection: "Personal",
      title: "FIFA World Player of the Year",
      message: "All my hard work has paid off!",
      label: "Happy",
      favourite: true,
      date: "18-11-2015",
    },
    {
      userID: "user1",
      id: 12,
      collection: "Family",
      title: "Sons Death",
      message: "My son died during childbirth",
      label: "Sad",
      favourite: false,
      date: "18-4-2022",
    },
  ];

  collectionData = [
    {
      id: 1,
      title: "Friends",
      subtitle: "Memories Shared With Friends",
      image: require("../assets/friends.png"),
    },
    {
      id: 2,
      title: "Family",
      subtitle: "A Collection of Memories With Family",
      image: require("../assets/family.png"),
    },
    {
      id: 3,
      title: "Personal",
      subtitle: "A Personal Collection of Memories",
      image: require("../assets/personal.png"),
    },
  ];

  emotionData = [
    {
      id: 1,
      title: "Happy",
    },
    {
      id: 2,
      title: "Excited",
    },
    {
      id: 3,
      title: "Sad",
    },
  ];

  static geInstance() {
    if (DataManager.myInstance == null) {
      DataManager.myInstance = new DataManager();
    }
    return this.myInstance;
  }

  addMemory(title, messageContent, collection, emotion) {
    // testing for empty, if empty then assigning default values
    if (title === "") {
      title = "--";
    }
    if (messageContent === "") {
      messageContent = "--";
    }
    // testing for placeholder, if placeholder then assign default
    if (collection === "Select A Collection") {
      collection = "Personal";
    }

    if (emotion === "What Emotion Did You Feel?") {
      emotion = "Happy";
    }

    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let seconds = new Date().getSeconds();

    let id = this.memoriesData.length + seconds + 1;

    for (let i = 0; i < this.memoriesData.length; i++) {
      if (id === this.memoriesData[i].id) {
        id = id * 2;
      }
    }

    let memory = {
      userID: this.userID,
      id: id,
      collection: collection,
      title: title,
      message: messageContent,
      label: emotion,
      favourite: false,
      date: date + "-" + month + "-" + year,
    };
    this.memoriesData.push(memory);
  }

  setUserID(id) {
    this.userID = id;
  }

  getUserID() {
    return this.userID;
  }

  getUsersName = () => {
    let user = this.users.filter((user) => user.id === this.userID);
    if (user.length > 0) {
      return user[0].name;
    }
  };

  getUserImage = () => {
    let user = this.users.filter((user) => user.id === this.userID);
    if (user.length > 0) {
      return user[0].image;
    }
  };

  setCollection(inColID) {
    this.collectionID = inColID;
  }

  getCollectionTitle() {
    let collection = this.collectionData.filter(
      (collection) => collection.id === this.collectionID
    );

    if (collection.length > 0) {
      return collection[0].title;
    }
  }

  getUserMemories() {
    let memories = this.memoriesData.filter(
      (memory) => memory.userID === this.userID
    );
    if (memories.length > 0) {
      return memories;
    }
  }

  getFavouriteMemories() {
    let memories = this.memoriesData.filter(
      (memory) => memory.userID === this.userID && memory.favourite === true
    );
    if (memories.length > 0) {
      return memories;
    }
  }

  getCollectionMemories() {
    let memories = this.memoriesData.filter(
      (memory) =>
        memory.collection === this.getCollectionTitle() &&
        memory.userID === this.userID
    );
    if (memories.length > 0) {
      return memories;
    }
  }

  setNewCollectionTitle(inNewTitle) {
    this.newCollectionTitle = inNewTitle;
  }

  getNewCollectionTitle() {
    return this.newCollectionTitle;
  }
  setNewLabel(inNewLabel) {
    this.newLabel = inNewLabel;
  }

  getNewLabel() {
    return this.newLabel;
  }

  getMemoryDate(id) {
    for (let i = 0; i < this.memoriesData.length; i++) {
      if (this.memoriesData[i].id === id) {
        return this.memoriesData[i].date;
      }
    }
  }

  getFilteredEmotions() {
    if (this.newLabel !== "What Emotion Did You Feel?") {
      let memories = this.memoriesData.filter(
        (memory) =>
          memory.label === this.newLabel &&
          memory.userID === this.userID &&
          memory.collection === this.getCollectionTitle()
      );
      if (memories.length > 0) {
        return memories;
      }
    } else {
      return this.getCollectionMemories();
    }
  }

  setPrefills(userID, id, collection, title, message, label) {
    this.currentEditMemory.userID = userID;
    this.currentEditMemory.id = id;
    this.currentEditMemory.collection = collection;
    this.currentEditMemory.title = title;
    this.currentEditMemory.message = message;
    this.currentEditMemory.label = label;
  }

  getCollectionPrefill() {
    return this.currentEditMemory.collection;
  }
  getTitlePrefill() {
    return this.currentEditMemory.title;
  }
  getMemoryContentsPrefill() {
    return this.currentEditMemory.message;
  }
  getEmotionPrefill() {
    return this.currentEditMemory.label;
  }

  delete(memory) {
    this.memoriesData = this.memoriesData.filter(
      (item) => item.id !== memory.id
    );
  }

  updateMemories(id, title, message, collection, emotion) {
    for (let i = 0; i < this.memoriesData.length; i++) {
      if (this.memoriesData[i].id === id) {
        if (!(this.memoriesData[i].title === title)) {
          this.memoriesData[i].title = title;
        }
        if (!(this.memoriesData[i].message === message)) {
          this.memoriesData[i].message = message;
        }
        if (!(this.memoriesData[i].collection === collection)) {
          if (this.newCollectionTitle !== "Select A Collection") {
            this.memoriesData[i].collection = collection;
            this.setNewCollectionTitle("Select A Collection");
          }
        }
        if (!(this.memoriesData[i].emotion === emotion)) {
          if (this.newLabel !== "What Emotion Did You Feel?") {
            this.memoriesData[i].label = emotion;
            this.setNewLabel("What Emotion Did You Feel?");
          }
        }
        break;
      }
    }
  }

  addUser(name, email, password) {
    let id = "user" + this.users.length + 1;
    let user = {
      id: id,
      name: name,
      email: email,
      password: password,
      image: require("../assets/placeholder.jpeg"),
    };
    this.users.push(user);
  }
}
