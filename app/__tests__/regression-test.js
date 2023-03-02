import React from "react";
import renderer from "react-test-renderer";
import AppListItem from "../components/AppListItem";
import DataManager from "../dataManager/DataManager";
import LoginScreen from "../screens/LoginScreen";

jest.useFakeTimers();

let commonData = DataManager.geInstance();

test("Adding a memory with placeholder/default values", () => {
  commonData.setUserID("user1");
  commonData.addMemory(
    "",
    "",
    "Select A Collection",
    "What Emotion Did You Feel?"
  );
  let addedMemory = commonData.getUserMemories().pop();
  expect(addedMemory.title).toBe("--");
  expect(addedMemory.collection).toBe("Personal");
  const rendered = renderer
    .create(
      <AppListItem
        title={addedMemory.title}
        message={addedMemory.message}
        id={addedMemory.id}
        icon={"emoticon-" + addedMemory.label.toLowerCase()}
      />
    )
    .toJSON();
  expect(rendered).toMatchSnapshot();
});

test("Adding a memory with valid user inputs", () => {
  commonData.setUserID("user1");
  commonData.addMemory("Taco Tuesday", "Tacos on Tuesday", "Personal", "Happy");
  let addedMemory = commonData.getUserMemories().pop();
  expect(addedMemory.title).toBe("Taco Tuesday");
  expect(addedMemory.collection).toBe("Personal");
  const rendered = renderer
    .create(
      <AppListItem
        title={addedMemory.title}
        message={addedMemory.message}
        id={addedMemory.id}
        icon={"emoticon-" + addedMemory.label.toLowerCase()}
      />
    )
    .toJSON();
  expect(rendered).toMatchSnapshot();
});

test("Display all user inputs required for user to login", () => {
  const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.children[1].children[1].props.placeholder).toBe("Email");
  expect(tree.children[2].children[1].props.placeholder).toBe("Password");
});

// // testing if company form is working
// describe("User Login tests ", () => {
//   it("Success test", async () => {
//     const handleSubmit = jest.fn();

//     const LoginScreen = render(<LoginScreen />);
//     const form = LoginScreen.getByTestId("form");

//     const email = form.getByTestId("loginEmail");
//     const password = form.getByTestId("loginPassword");
//     console.log(email);

//     // const submitButton = LoginScreen.getByTestId("companyFormSubmitButton");

//     // userEvent.type(email, "therock@gmail.com");
//     // userEvent.type(password, "rock1234");
//     // userEvent.click(submitButton);
//     // await waitFor(() =>
//     //   expect(handleSubmit).toHaveBeenCalledWith({
//     //     password: "rock1234",
//     //     email: "therock@gmail.com",
//     //   })
//     // );
//   });
// });

// describe("Logging into Application", () => {
//   it("Should display all user inputs required for user to login", () => {
//     const tree = renderer.create(<LoginScreen />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });

// expect(
//   instanceOfLoginScreen.validateUser("therock@gmail.com", "rock12345678")
// ).tobe(true);
//});

// Enzyme.configure({ adapter: new Adapter() });
// describe("LoginScreen", () => {
//   it("should show user input", () => {
//     const wrapper = shallow(<LoginScreen />);
//     const appScreen = wrapper.find(AppScreen);
//     const formik = appScreen.find(Formik);
//     const userTextInput = appScreen.find(AppTextInput);

//     // const mockEvent = {
//     //   target: { name: "email", value: "therock@gmail.com" },
//     // };
//     // const userTextInput = userInput.find(Formik).dive().props().children.props
//     //   .children[0];

//     //const propsOfUserTextInput = userTextInput.length;

//     //userTextInput.simulate("onChange", mockEvent);

//     // obtaining values.
//     //const userInput2 = userInput.find(Formik).dive().props().value.values;

//     console.log(appScreen.length);
//   });
//   // it("should hide text when button is clicked", () => {
//   //   const wrapper = shallow(<LoginScreen />);
//   //   const button = wrapper.find(<AppButton />);
//   //   button.simulate("click");
//   // });
// });

// describe("LoginScreen", () => {
//   test("should update email field on change", () => {
//     const tree = shallow(<LoginScreen />);
//     const appScreen = tree.find(AppScreen);
//     const emailInput = appScreen.findWhere(
//       (node) => node.prop("testID") === "loginEmail"
//     );
//     console.log(emailInput.props());
//     emailInput
//       .simulate("change", {
//         persist: () => {},
//         target: {
//           name: "email",
//           value: "email@gmail.com",
//         },
//       })
//       .update();
//     expect(emailInput.html()).toMatch("email@gmail.com");
//   });
// });
