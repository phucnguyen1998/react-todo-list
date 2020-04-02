import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import randomstring from 'randomstring';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [], // id: duy nhat khong trung, name, status
      isDisplayForm: false
    }
  }
  
  
  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')){
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      });
    }
  }
  
  onToggleForm = () => {
    this.setState({
      isDisplayForm : !this.state.isDisplayForm
    });
  }

  generateData = () =>{
      let tasks = [
        {
          id: randomstring.generate(7),
          name: 'hoc lap trinh',
          status: true
        },
        {
          id: randomstring.generate(7) ,
          name: 'Di choi',
          status: false
        },
        {
          id: randomstring.generate(7) ,
          name: 'Xem phim',
          status: true
        }
      ]

    this.setState({
      task: tasks
    });

    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  }

  render() {
    let {tasks, isDisplayForm} = this.state;
    let elmTaskForm = isDisplayForm === true ? <TaskForm onCloseForm={() => this.onCloseForm()}/> : '';
    return (
      <div className="container">
        <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
            <div className={isDisplayForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                {elmTaskForm}
            </div>
            <div className={isDisplayForm === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                <button type="button" className="btn btn-primary" onClick={() => this.onToggleForm()}>
                    <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>
                <button type="button" className="btn btn-danger ml-5" onClick={() => this.generateData()}>
                    Generate Data
                </button>
                {/* Seach - srort */}
                <Control/>
                <div className="row mt-15">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-15">
                        {/* List */}
                        <TaskList tasks= {tasks}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;

