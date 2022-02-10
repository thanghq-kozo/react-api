import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
// import axios from "axios";
import Search from "../Search";
import data from "../../data.json";

function HomePage() {
  const [isSearch, setIsSearch] = useState(false);

  const [values, setValues] = useState({
    word: "",
  });

  const [wordInfo, setWordInfo] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSearch = async () => {
    document.getElementById("Search").disabled = true;
    try {
      const word = data.find((o) => o.word === values.word);
      if (word) {
        // await axios.get(
        //   `https://cors-anywhere.herokuapp.com/https://first-nodejs-vervel.vercel.app/?word=${word}`
        // ).then(({data}) => {
        //   setWordInfo(data);
        // });
        await new Promise((resolve) => setTimeout(resolve, 2 * 1000));
        setWordInfo(word);
        setIsSearch(true);
      } else {
        setIsSearch(false);
      }
    } catch (error) {
      console.error("Please check your word", error);
    }
    document.getElementById("Search").disabled = false;
  };

  return (
    <div>
      <div
        className="login-form my-5"
        style={{ width: "500px", marginLeft: "auto", marginRight: "auto" }}
      >
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
              <Input
                data={{
                  label: "WORD",
                  type: "text",
                  name: "word",
                  pla: "Please enter your word!!",
                }}
                value={values.word}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="text-center">
              <Button data={{ name: "Search" }} onClick={handleSearch} />
            </div>
          </div>
        </div>
      </div>
      {isSearch && wordInfo && <Search data={wordInfo} />}
    </div>
  );
}

export default HomePage;
