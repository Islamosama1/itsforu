import { fireApp } from "@/important/firebase";
import { generateId, realEscapeString } from "../utilities";
import { collection, doc, setDoc } from "firebase/firestore";
import { generateSalt, hashPassword } from "./encryption";
import { EmailJs } from "../EmailJs";
import { welcomeEmail } from "../emailTemplate";
import Error from "next/error";

export const createAccount = async (data) => {
  const { email, username, password } = data;
  const userId = generateId();
  const generatedUserId = userId;

  console.log("Creating account...");
  try {
    const accountRef = collection(fireApp, "accounts");
    const accountDetailsRef = collection(fireApp, "AccountData");
    console.log(accountRef);
    const cleanUsername = realEscapeString(username);
    const cleanEmail = realEscapeString(email);
    const cleanPassword = realEscapeString(password);

    const salt = generateSalt();
    const hashedPasword = hashPassword(cleanPassword, salt);

    const emailPayload = {
      htmlContent: welcomeEmail(cleanEmail, cleanPassword, cleanUsername),
      email: cleanEmail,
      name: cleanUsername,
      password: cleanPassword,
    };

    console.log("Sending welcome email...");
    console.log(emailPayload);
    await EmailJs(
      emailPayload.name,
      emailPayload.email,
      "Thanks for creating an account!",
      emailPayload.htmlContent
    )
      .then((response) => {
        console.log(response);
        if (!response.ok)
          throw new Error(
            `Failed to send Email because: ${response.statusText}`
          );
      })
      .catch((error) => {
        throw new Error(`${error}`);
      });

    try {
      await setDoc(doc(accountRef, `${userId}`), {
        userId: userId,
        email: cleanEmail,
        username: cleanUsername,
        password: hashedPasword,
        mySalt: salt,
      });

      console.log("hereeeeeeeeeeeeee");
      await setDoc(doc(accountDetailsRef, `${userId}`), {
        displayName: cleanUsername,
        links: [],
        profilePhoto: "",
        selectedTheme: "Lake White",
      });
      console.log("Account created successfully");
    } catch (error) {
      console.error("Error creating account: ", error);
    }

    console.log("Account created!");
    return generatedUserId;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
