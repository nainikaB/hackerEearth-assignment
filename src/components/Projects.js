import React from "react";
import axios from "axios";

class Projects extends React.Component {
  state = {
    projectsData: [],
    search: "",
  };
  data = { projectData: [] };
  componentDidMount() {
    axios
      .get("https://api.github.com/users/supreetsingh247/repos")
      .then((response) => {
        console.log(response.data);
        this.setState({
          projectsData: response.data,
        });
        this.data.projectData = response.data;
      })
      .catch((err) => {
        alert(err);
      });
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState((prevState) => {
      return {
        search: value,
        projectData: this.data.projectData.filter((project) => {
          return project.name.includes(value);
        }),
      };
    });
  };
  render() {
    return (
      <div>
        <button>Overview</button>
        <button>Repositories</button>
        <button>Projects</button>
        <input
          type="text"
          value={this.state.search}
          onChange={this.handleChange}
          placeholder="find a repository"
        />
        <ul>
          {this.state.projectsData.map((project) => {
            return (
              <li key={project.id}>
                {project.name}
                <p>{project.language}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Projects;
