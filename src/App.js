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

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  }

  onSubmit = (data) => {
    data.id = randomstring.generate(7);
    let {tasks} = this.state;
    tasks.push(data);
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks',JSON.stringify(tasks)); 
  }

  onUpdateStatus = (id) => {
    let {tasks} = this.state;
    let index = this.findIndex(id);
    if(index !== -1){
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
  }

  findIndex = (id) => {
    let {tasks} = this.state;
    let result = -1;
    tasks.forEach((task,index) => { 
      if(task.id === id){
        result = index;
      }
    });
    return result;
  }

  onDelete = (id) => {
    let {tasks} = this.state;
    let index = this.findIndex(id);
    if(index !== -1){
      tasks.splice(index, 1)
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    this.onCloseForm()
  }

  render() {
    let {tasks, isDisplayForm} = this.state;
    let elmTaskForm = isDisplayForm === true ? <TaskForm onSubmit={this.onSubmit} onCloseForm={() => this.onCloseForm()}/> : '';
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
                {/* Seach - srort */}
                <Control/>
                <div className="row mt-15">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-15">
                        {/* List */}
                        <TaskList onUpdateStatus={this.onUpdateStatus} onDelete={this.onDelete} tasks={tasks}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;

