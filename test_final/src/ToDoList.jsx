import React, { useState, useEffect } from 'react';
import './style.css';

export default function ToDoList() {
  const [dataInput, setDataInput] = useState("");
  const [edit, setEdit] = useState({
    id: "",
    status: false,
  });
  const [data, setData] = useState([
    {
      id: "1",
      taskName: "Do coding",
      status: true,
    },
    {
      id: "2",
      taskName: "Test",
      status: false,
    },
    {
      id: "3",
      taskName: "Fix bug",
      status: false,
    },
  ]);
  const [filterType, setFilterType] = useState('all');

  // Hàm checked
  const changeCheck = (event, id) => {
    let newData = [...data];
    let findIndex = newData.findIndex((item) => id === item.id);
    newData[findIndex].status = event.target.checked;
    setData(newData);
  };

  // Hàm Update
  const update = (id) => {
    let newData = [...data];
    let findIndex = newData.findIndex((item) => id === item.id);
    setDataInput(newData[findIndex].taskName);
    setEdit({
      id: id,
      status: true,
    });
  };

  // Hàm Save sau khi edit
  const save = () => {
    let newData = [...data];
    let findIndex = newData.findIndex((item) => edit.id === item.id);
    newData[findIndex].taskName = dataInput;
    setData(newData);
    setDataInput("");
    setEdit({ id: "", status: false });
  };

  // Hàm delete
  const deleteTask = (id) => {
    let newData = data.filter(item => item.id !== id);
    setData(newData);
  };

  // Hàm delete all
  const deleteAllTasks = () => {
    setData([]);
  };

  // Hàm render
  const renderTask = () => {
    return data.filter((item) => {
      if (filterType === 'all') return true;
      if (filterType === 'active') return !item.status;
      if (filterType === 'completed') return item.status;
      return true;
    }).map((item) => {
      let stylecss = 'activeTask';
      if (item.status) {
        stylecss = 'completedTask';
      }
      return (
        <div className={stylecss} key={item.id}>
          <div>
            <input checked={item.status} type="checkbox" onChange={(event) => changeCheck(event, item.id)} />
            <span>{item.taskName}</span>
          </div>
          <div>
            <button className='delete' onClick={() => deleteTask(item.id)}>delete</button>
            <button onClick={() => update(item.id)}>update</button>
          </div>
        </div>
      );
    });
  };

  // Hàm lấy data input
  const handleChange = (e) => {
    setDataInput(e.target.value);
  };

  // Hàm add task
  const addTask = () => {
    let newData = [...data];
    let findIndex = newData.findIndex((item) => dataInput === item.taskName);
    // Nếu giá trị rỗng
    if (dataInput.trim().length === 0) {
      alert('Hãy nhập vào ô input!');
    } else {
      if (findIndex === -1) {
        newData.push({
          id: Math.floor(Math.random() * 100).toString(),
          taskName: dataInput,
          status: false,
        });
      } else {
        alert("Task đã tồn tại");
      }
    }
    setData(newData);
    setDataInput("");
    setEdit({ id: "", status: false });
  };

  // Xử lý sự kiện click cho các tab
  useEffect(() => {
    const tabs = document.querySelectorAll('.btn-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        tabs.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        setFilterType(e.target.textContent.toLowerCase());
      });
    });

    return () => {
      tabs.forEach(tab => tab.removeEventListener('click', () => {}));
    };
  }, []);

  return (
    <div className='app'>
      <div className="content">
        <h1>TO DO LIST</h1>
        <input onChange={handleChange} value={dataInput} type="text" placeholder='Enter new task' />
        <div>
          <div className='tab'>
            <ul className="nav" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="btn-tab active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">All</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="btn-tab" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Active</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="btn-tab" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Completed</button>
              </li>
            </ul>
            {edit.status ? <button className='btn' onClick={save}>Save</button> : <button className='btn' onClick={addTask}>Add task</button>}
            <button className='btn btn-danger' onClick={deleteAllTasks}>Delete all</button>
          </div>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>{renderTask()}</div>
            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>{renderTask()}</div>
            <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>{renderTask()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
