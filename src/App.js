import React, { useEffect, useState, Component } from "react";
import { useFetch } from "./useFetch";
import { Hello } from "./Hello";
import { Todos } from "./Todos";
import { NotePost } from "./NotePost";
import Country from "./Country";
import Contact from "./Contact";
import { axios } from "./Axios";
import "./App.css";

const App = () => {
  //API 1
  // const [showHello, setHello] = useState(true);
  // const [count, setCount] = useState(() =>
  //   JSON.parse(localStorage.getItem("count"))
  // );
  // const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  // useEffect(() => {
  //   localStorage.setItem("count", JSON.stringify(count));
  // }, [count]);

  //API 2
  // const [items, setItems] = useState([]);
  // const [resourceType, setResourceType] = useState("posts");
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  // }, [resourceType]);

  // API 3 AXIOS
  // const LOCAL_STORAGE_KEY = "todos";
  // const [todos, setTodos] = useState([]);
  // const Todoo = !todos || (todos && todos.length === 0);

  // console.log("TODOS: ", todos);

  // const todoView = async () => {
  //   const response = await axios
  //     .get("/todos")
  //     .catch((err) => console.log("Error", err));
  //   if (response && response.data) setTodos(response.data);
  // };

  // useEffect(() => {
  //   todoView();
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  // }, [todos]);

  // API 4 AXIOS

  // const [joke, setJoke] = useState([]);

  // const getJoke = () => {
  // AXIOS
  // axios.get("https://official-joke-api.appspot.com/random_joke")
  //   .then((response) => {
  //     console.log(response);
  //     setJoke(response.data.setup + " ... " + response.data.punchline);
  //   });

  // JSON
  //   fetch("https://official-joke-api.appspot.com/random_joke").then(
  //     (response) => {
  //       response
  //         .json()
  //         .then((data) => setJoke(data.setup + " ... " + data.punchline));
  //     }
  //   );
  // };

  // API 5 AXIOS
  // class ClassAxios extends Component {
  //   state = {
  //     persons: [],
  //   };
  //   componentDidMount() {
  //     axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
  //       const persons = res.data;
  //       this.setState({ persons });
  //     });
  //   }
  //   render() {
  //     return (
  //       <div>
  //         <ul>
  //           {this.state.persons.map((person) => (
  //             <li>
  //               {person.name} "Email" {person.email}
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     );
  //   }
  // }

  // API 6 with SEARCH
  // const [data, setData] = useState({ hits: [] });
  // const [query, setQuery] = useState("react");

  // useEffect(() => {
  //   let ignore = false;

  //   async function fetchData() {
  //     const result = await axios(
  //       "https://hn.algolia.com/api/v1/search?query=" + query
  //     );
  //     if (!ignore) setData(result.data);
  //   }

  //   fetchData();
  //   return () => {
  //     ignore = true;
  //   };
  // }, [query]);

  // API 7
  // const [contacts, setContacts] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   getContacts();
  // }, []);

  // const getContacts = async () => {
  //   try {
  //     const res = await axios.get("https://randomuser.me/api/?results=12");
  //     setContacts(res.data.results);
  //     setLoading(true);
  //   } catch (err) {
  //     alert(err.message);
  //   }
  // };
  // console.log(contacts);

  return (
    <>
      {/* API 1 */}
      {/* <button onClick={() => setHello(!showHello)}>Toggle</button>
      {showHello && <Hello />}
      <div>{!data ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button> */}
      {/* API 2 */}
      {/* <h1>{resourceType}</h1>
      {items.map((item) => {
        return (
          <div>
            <p>
              <pre>{JSON.stringify(item)}</pre> 
              <pre>{item.title}</pre>
              <pre>{item.userId}</pre>
              <pre>{item.id}</pre>
              <pre>{item.body}</pre>
            </p>
          </div>
        );
      })} */}
      {/* API 3 AXIOS */}
      {/* <h3>Todos</h3>
      {!Todoo && todos.map((todos, idx) => <Todos key={idx} {...todos} />)} */}
      {/* API 4 AXIOS */}
      {/* Click This I got a joke!{" "}
      <button onClick={getJoke}>Get Joke Right Now!</button>
      {joke} */}

      {/* API 5 */}
      {/* <ClassAxios /> */}

      {/* API 6 w/ SEARCH*/}

      {/* <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul> */}

      {/* API 6 w/ SEARCH*/}

      {/* <main>
        {loading &&
          contacts.map((contact) => (
            <div key={contact.login.uiid}>
              {contact.name.first}
              <Contact contact={contact} />
            </div>
          ))}
      </main> */}

      {/* API 7 w/ loading */}
      <Country />
    </>
  );
};

export default App;
