import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import React, { useState } from 'react';
import { Tabs, Table, Tooltip, Space, Popconfirm, Modal, confirmPopConf, Button, Button, Tree, DatePicker, Switch, Input, Search, Form, Typography, Select, TreeSelect, ConfigProvider, Checkbox, Cascader } from 'antd';
import moment from 'moment';
import Highlighter from 'react-highlight-words';
import {
  QuestionCircleTwoTone,
  EditTwoTone,
  DeleteTwoTone,
  WarningTwoTone,
  CheckCircleTwoTone,
  InfoCircleTwoTone,
  StopTwoTone,
  ExclamationCircleOutlined,
  FolderOutlined,
  UserOutlined,
  SearchOutlined,
  ScheduleOutlined,
  LineChartOutlined,
  AlertOutlined,
  FieldTimeOutlined,
  ApiOutlined,
  TeamOutlined,
  InteractionOutlined,
  SafetyCertificateOutlined,
  ProfileOutlined,
  CarryOutOutlined,
  WifiOutlined,
  ToolOutlined,
  SnippetsOutlined,
  HistoryOutlined,
  FileDoneOutlined,
  FileTextOutlined,
  ReconciliationOutlined,
  UserAddOutlined

} from '@ant-design/icons';
import reqwest from 'reqwest';
import ReactPaginate from 'react-paginate';
import Pagination from './components/Pagination';

import ruRU from 'antd/lib/locale/ru_RU';

//const { RangePicker } = DatePicker;

function onChangeData(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

const { TabPane } = Tabs;
const { Column, ColumnGroup } = Table;

const { Search } = Input;
const onSearch = value => console.log(value);

function callback(key) {
  console.log(key);
}

function showConfirm() {
  confirm({
    title: 'Подтверждение',
    icon: <ExclamationCircleOutlined />,
    content: 'Вы действительно хотите удалить <b>1000</b> условий контроля?',
    onOk() {
      console.log('Да');
    },
    onCancel() {
      console.log('Отмена');
    },
  });
}

const { confirm } = Modal;

const data1 = [
  {
    key: '1',
    number:'1',
    data: '01.01.2021',
    abonent: 'Тест1',
    events: 'ООО Тест1',
  },
  {
    key: '2',
    number:'2',
    data: '01.01.2021',
    abonent: 'Тест2',
    events: 'ООО Тест2',
  },
  {
    key: '3',
    number:'3',
    data: '01.01.2021',
    abonent: 'Тест3',
    events: 'ООО Тест3',
  },
  {
    key: '4',
    number:'4',
    data: '01.01.2021',
    abonent: 'Тест4',
    events: 'ООО Тест4',
  },
  {
    key: '5',
    number:'5',
    data: '01.01.2021',
    abonent: 'Тест5',
    events: 'ООО Тест5',
  },
  {
    key: '6',
    number:'6',
    data: '01.01.2021',
    abonent: 'Тест6',
    events: 'ООО Тест6',
  },
  {
    key: '7',
    number:'7',
    data: '01.01.2021',
    abonent: 'Тест7',
    events: 'ООО Тест7',
  },
  {
    key: '8',
    number:'8',
    data: '01.01.2021',
    abonent: 'Тест8',
    events: 'ООО Тест8',
  },
  {
    key: '9',
    number:'9',
    data: '01.01.2021',
    abonent: 'Тест9',
    events: 'ООО Тест9',
  },
  {
    key: '10',
    number:'10',
    data: '01.01.2021',
    abonent: 'Тест10',
    events: 'ООО Тест10',
  },
  {
    key: '11',
    number:'11',
    data: '01.01.2021',
    abonent: 'Тест11',
    events: 'ООО Тест11',
  },
  {
    key: '12',
    number:'12',
    data: '01.01.2021',
    abonent: 'Тест12',
    events: 'ООО Тест12',
  },
  {
    key: '13',
    number:'13',
    data: '01.01.2021',
    abonent: 'Тест13',
    events: 'ООО Тест13',
  },
  {
    key: '14',
    number:'14',
    data: '01.01.2021',
    abonent: 'Тест14',
    events: 'ООО Тест14',
  },
  {
    key: '15',
    number:'15',
    data: '01.01.2021',
    abonent: 'Тест15',
    events: 'ООО Тест15',
  },

  
  
];

const data2 = [
  {
    key: '1',
    object: 'ДОМ №22 ТЭ',
    number: '1',
    name: 'Объединённый институт',
    tariff: 'Контроль',
    pay: '2000',
  },

  {
    key: '2',
    object: 'ДОМ №4 ГВС',
    number: '2',
    name: 'Объединённый институт',
    tariff: 'Базовый',
    pay: '1000',
  },

  {
    key: '3',
    object: 'ДОМ №22 ТЭ',
    number: '3',
    name: 'Объединённый институт',
    tariff: 'Контроль +',
    pay: '3000',
  },


];

//Для сортировщика
const sorter = (a, b) => (isNaN(a) && isNaN(b) ? (a || '').localeCompare(b || '') : a - b);

const columns3 = [
  {
    dataIndex:'edit',
    key:'edit',
    render: record => 
              <Space size="middle">
              <Popconfirm placement="right" title={'Вы действительно хотите удалить данное оповещение?'} onConfirm={confirmPopConf} okText="Да" cancelText="Нет">
              <Button shape="circle" icon={<EditTwoTone />} />
              </Popconfirm>
            
            </Space>
        
  },
  {
    title: <Space size="middle">
    <Button shape="circle" onClick={showConfirm} icon={<DeleteTwoTone />} />
    </Space>,
    dataIndex:'delete',
    key:'delete',
    render: record => 
              <Space size="middle">
                <Button shape="circle" onClick={showConfirm} icon={<DeleteTwoTone />} />
              </Space>
        
  },


  {
    title: 'Счёт',
    dataIndex: 'bill',
    key:'bill',
    sorter: true,
    sorter: (a, b) => sorter(a.bill, b.bill),
    sortDirections: ['descend', 'ascend'],
  },

  {
    title: 'Сумма',
    dataIndex: 'sum',
    key: 'sum',
    sorter: (a, b) => sorter(a.sum, b.sum),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Дата счёта',
    dataIndex: 'bill_date',
    key:'bill_date',
    sorter: true,
    sorter: (a, b) => sorter(a.bill_date, b.bill_date),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Описание',
    dataIndex: 'discription',
    key:'discription',
    sorter: true,
    sorter: (a, b) => sorter(a.discription, b.discription),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Нач. дата',
    dataIndex: 'data_start',
    key: 'data_start',
    sorter: true,
    sorter: (a, b) => sorter(a.data_start, b.data_start),
    sortDirections: ['descend', 'ascend'],
 
  },
  {
    title: 'Кон. дата',
    dataIndex: 'data_end',
    key: 'data_end',
    sorter: true,
    sorter: (a, b) => sorter(a.data_end, b.data_end),
    sortDirections: ['descend', 'ascend'],
 
  },
 

];

const data3 = [
  {
    key: '1',
    bill: '334',
    sum: '1500',
    bill_date: '01.01.2021',
    discription: '1кв2021',
    data_start: '01.01.2021',
    data_end: '01.04.2021',
  
  },
{
    key: '2',
    bill: '334',
    sum: '1500',
    bill_date: '01.01.2021',
    discription: '1кв2021',
    data_start: '01.01.2021',
    data_end: '01.04.2021',
  },
  {
    key: '3',
    bill: '334',
    sum: '1500',
    bill_date: '01.01.2021',
    discription: '1кв2021',
    data_start: '01.01.2021',
    data_end: '01.04.2021',
  },
  {
    key: '4',
    bill: '334',
    sum: '1500',
    bill_date: '01.01.2021',
    discription: '1кв2021',
    data_start: '01.01.2021',
    data_end: '01.04.2021',
  },

   
  
];

const onChange4 = (value) => {
  console.log(value);
};

const options4 = [
  {
    value: 'received',
    label: 'Получен',
  },
  {
    value: 'sent',
    label: 'Отправлен',
  },
  {
    value: 'not_sent',
    label: 'Не отправлен',
  },
];

const columns4 = [
  {
    dataIndex:'edit',
    key:'edit',
    render: record => 
              <Space size="middle">
              <Popconfirm placement="right" title={'Вы действительно хотите удалить данное оповещение?'} onConfirm={confirmPopConf} okText="Да" cancelText="Нет">
              <Button shape="circle" icon={<EditTwoTone />} />
              </Popconfirm>
            
            </Space>
        
  },
  {
    title: <Space size="middle">
    <Button shape="circle" onClick={showConfirm} icon={<DeleteTwoTone />} />
    </Space>,
    dataIndex:'delete',
    key:'delete',
    render: record => 
              <Space size="middle">
                <Button shape="circle" onClick={showConfirm} icon={<DeleteTwoTone />} />
              </Space>
        
  },

  {
    title: 'Дата',
    dataIndex: 'date',
    key:'date',
    sorter: true,
    sorter: (a, b) => sorter(a.date, b.date),
    sortDirections: ['descend', 'ascend'],
  },

  {
    title: 'Описание',
    dataIndex: 'discription',
    key:'discription',
    sorter: true,
    sorter: (a, b) => sorter(a.discription, b.discription),
    sortDirections: ['descend', 'ascend'],
  },

  {
    title: 'Сумма',
    dataIndex: 'sum',
    key: 'sum',
    sorter: (a, b) => sorter(a.sum, b.sum),
    sortDirections: ['descend', 'ascend'],
  },

  {
    title: 'Статус',
    dataIndex: 'status',
    align: 'center',
    render: record => <Cascader options={options4} onChange={onChange4} placeholder="Получен" />
       
  },
];

const data4 = [
  {
    key: '1',
    bill: '334',
    sum: '1500',
    date: '01.01.2021',
    discription: '1кв2021',
  
  },
{
    key: '2',
    bill: '334',
    sum: '1500',
    date: '01.01.2021',
    discription: '1кв2021',
  },
  {
    key: '3',
    bill: '334',
    sum: '1500',
    date: '01.01.2021',
    discription: '1кв2021',
  },
  {
    key: '4',
    bill: '334',
    sum: '1500',
    date: '01.01.2021',
    discription: '1кв2021',
  },

   
  
];

const treeData1 = [
  {
    title: 'Группы',
    key: '0-0',
    value: '0-0',
    children: [
      {
        title: 'Договор',
        key: '0-0-0',
        value: '0-0-0',
        children: [
          {
            title: 'ЖК_Гарден Парк',
            key: '0-0-0-0',
            value: '0-0-0-0',
          },
          {
            title: 'ЖК_Легенда',
            key: '0-0-0-1',
            value: '0-0-0-1',
          },
          {
            title: 'ЖК_Эдальго',
            key: '0-0-0-2',
            value: '0-0-0-2',
          },
        ],
      },
      {
        title: 'Электрогорск',
        key: '0-0-1',
        value: '0-0-1',
        children: [
          {
            title: 'ЦДО "Истоки"',
            key: '0-0-1-0',
            value: '0-0-1-0',
          },
          {
            title: 'ЦДО"Истоки"',
            key: '0-0-1-1',
            value: '0-0-1-1',
          },
        ],
      },
      {
      title: 'ЛК МОЭК',
      key: '0-0-2',
      value: '0-0-2',
      children: [
        {
          title: '0150/004',
          key: '0-0-2-0',
          value: '0-0-2-0',
        },
        {
          title: '0303/047',
          key: '0-0-2-1',
          value: '0-0-2-1',
        },
        {
          title: 'ЦСКА',
          key: '0-0-2-3',
          value: '0-0-2-3',
        },
      ],
      },
      {
        title: '0003/004',
        key: '0-0-3',
        value: '0-0-3',
      },
    ],
  },
];

class Demo extends React.Component {
  state = {
     value: ['0-0'],
  };

  onChange = value => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    return (
      <TreeSelect
        style={{ width: '100%' }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData1}
        placeholder="Выберите группу"
        //treeDefaultExpandAll
        onChange={this.onChange}
        treeCheckable
        maxTagCount={1}
       
      />
    );
  }
}

const TreeSelect1 = () => {

  const state = {
    value: ['0-0'],
  };

  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  return (
    <TreeSelect
      //checkable
      treeCheckable
      //treeDataSimpleMode
      // defaultExpandedKeys={['0-0']}
      // defaultSelectedKeys={['0-0']}
      // defaultCheckedKeys={['0-0']}
      //value = {state.value}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData1}
      style={{ width: 200 }}
      //maxTag
      //style ={width: '100%'}
      //width = {50}
    />
  );
};

const treeData2 = [
  {
    title: 'Ресурсы',
    key: '0-0',
    children: [
      {
        title: 'ТЭ',
        key: '0-0-0',
      },
       {
        title: 'ЦО',
        key: '0-0-1',
      },
       {
        title: 'ГВС',
        key: '0-0-2',
      },
       {
        title: 'Вент',
        key: '0-0-3',
      },
       {
        title: 'ХВС',
        key: '0-0-4',
      },
       {
        title: 'ЭЭ',
        key: '0-0-5',
      },
       {
        title: 'Газ',
        key: '0-0-6',
      },
       {
        title: 'Пар',
        key: '0-0-7',
      },
    ],  
  },    
];

const TreeSelect2 = () => {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  return (
    <Tree
      checkable
      // defaultExpandedKeys={['0-0-0', '0-0-1']}
      // defaultSelectedKeys={['0-0-0', '0-0-1']}
      // defaultCheckedKeys={['0-0-0', '0-0-1']}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData2}
    />
  );
};

const treeData3 = [
  {
    title: 'Тип условия',
    key: '0-0',
    children: [
      {
        title: 'Групповое',
        key: '0-0-0',
      },
       {
        title: 'Индивидуальное',
        key: '0-0-1',
      },
    ],  
  },    
];

const TreeSelect3 = () => {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  return (
    <Tree
      checkable
      // defaultExpandedKeys={['0-0-0', '0-0-1']}
      // defaultSelectedKeys={['0-0-0', '0-0-1']}
      defaultCheckedKeys={['0-0']}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData3}
    />
  );
};

const { RangePicker } = DatePicker;

//Первый столбец с выбором галочек
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    //disabled: record.key == 2,
    // Column configuration not to be checked
    key: record.key,
  }),
   
};

//Фильтр по таблице "Точки учёта"
class FilterSearch1 extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Найти ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Найти
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Сброс
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Фильтр
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns1 = [
      {
        title: '№',
        dataIndex: 'number',
        //render: record => <a>Выбрать</a>,
       
      },
  
  {
    title: 'Дата',
    dataIndex: 'data',
    //render: record => <a>Выбрать</a>,
   
  },
  
  {
    title: 'Пользователь',
    dataIndex: 'abonent',
    key: 'abonent',
    ...this.getColumnSearchProps('abonent'),
    sorter: (a, b) => sorter(a.abonent, b.abonent),
    ...this.getColumnSearchProps('abonent'),
    //align: 'right',
  },
  {
    title: 'Контрагент',
    dataIndex: 'events',
    key: 'events',
    ...this.getColumnSearchProps('events'),
    sorter: (a, b) => sorter(a.events, b.events),
    // render: text => <a>{text}</a>,
  },
 

 // {
 //   title: <Button size="small">Квитировано всё</Button>,
 //   dataIndex: 'read-all',
 //   render: record => <Button size="small">Квитировано</Button>,
 //   align: 'center',
 // },

];

    return <Table
              style={{"borderWidth":"2px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}} 
              columns={columns1}
              dataSource={data1}
              //rowSelection={{
              //  type: Checkbox,
              //  ...rowSelection,
             // }}
              bordered
              title={() => 'Договоры'}
              pagination={{ pageSize: 13 }}
            />;
  }
}

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
//Фильтр по таблице "Сообщения контроля"
class FilterSearch2 extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Найти ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Найти
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Сброс
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Фильтр
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns2 = [
      {
        title: '№',
        dataIndex: 'number',
      },
      {
        title: 'Инфо',
        dataIndex: 'select',
        //render: record => <a>Выбрать</a>,
        render: record => 
          <Space size="middle">
            <Button type="primary" shape="circle" icon={<ScheduleOutlined />} color="#0c569b"
            style={{
              //   color: 'white',
                   backgroundColor: '#0c569b',
                   underlayColor:'#0c569b',
                   }}
            >
            </Button>
          </Space>
      },


  {
    title: 'Точка учёта',
    dataIndex: 'object',
    key: 'object',
    sorter: (a, b) => sorter(a.object, b.object),
    ...this.getColumnSearchProps('object'),
    //sortDirections: ['descend', 'ascend'],
    //align: 'right',
  },
  {
    title: 'Наименование',
    dataIndex: 'name',
    key: 'name',
    //render: text => <a>{text}</a>,
    sorter: true,
    sorter: (a, b) => sorter(a.time, b.time),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Тариф',
    dataIndex: 'tariff',
    key: 'tariff',
    render: text => <a>{text}</a>,
    sorter: (a, b) => sorter(a.event, b.event),
    sortDirections: ['descend', 'ascend'],
    ...this.getColumnSearchProps('event'),
  },
  {
  title: 'Аб. плата',
  dataIndex: 'pay',
  align: 'center',
 
},
{
  title: 'Активен',
  dataIndex: 'status',
  align: 'center',
  render: record => <Checkbox onChange={onChange} ></Checkbox>
  

 
},
];

    return <Table
              style={{"borderWidth":"2px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}} 
              columns={columns2}
              dataSource={data2}
              bordered
              title={() => 'Точки учёта'}
            />;
  }
}

function onChange1(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

//Для селекта
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}

//Модальное окно добавления условия
class ModalСondition extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  //Модальное окно добавления рассылки
  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Добавить условие
        </Button>

        {/* <Button shape="circle"
          onClick={this.showModal}
          icon={<PlusCircleTwoTone twoToneColor="#52c41a" />}
        /> */}

        <Modal
          title="Добавление условия"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="Добавить"
          cancelText="Отмена"
        >
             <div className="site-input-group-wrapper">
              <Input.Group size="small">
              <Space direction="vertical">
                <Space>
                  Новое условие
                  <Select defaultValue="Утечка больше" size="small" onChange={handleChange}>
                      <Option value="sms">Утечка больше</Option>
                      <Option value="sms">Подмес больше</Option>
                      <Option value="e-mail">t1 - t2</Option>
                      <Option value="e-mail">t2 меньше t1/2 + </Option>
                  </Select>
                  <Input size="small" placeholder="100" style={{ width: '70px'}} />
                  кг
                </Space>
                <Space>
                  Тип условия
                  <Select defaultValue="Групповое" size="small" onChange={handleChange}>
                      <Option value="sms">Групповое</Option>
                      <Option value="e-mail">Индивидуальное</Option>
                  </Select>
                </Space>
                <Space>
                  Для точки учёта/группы
                  <Select defaultValue="Номер точки учёта" size="small" onChange={handleChange}>
                    <Option value="sms">ДОМ 1</Option>
                    <Option value="e-mail">ДОМ 2</Option>
                    <Option value="sms">ДОМ 3</Option>
                    <Option value="e-mail">ДОМ 4</Option>
                    <Option value="sms">ДОМ 5</Option>
                    <Option value="e-mail">ДОМ 6</Option>
                  </Select>

                </Space>
                <Switch
                  checkedChildren=  "Режим эксперта"
                  unCheckedChildren="Режим эксперта"
                  defaultunChecked
                />
              </Space>
              
             
              </Input.Group>
            </div>
            
        </Modal>
      </>
    );
  }
}

//третья тестовая вкладка с пагинацией, но грузит json данные, после чего показывает мои
const getRandomuserParams = params => ({
  results: params.pagination.pageSize,
  page: params.pagination.current,
  ...params,
});

class PaginationTab extends React.Component {
  state = {
    data: [],
    pagination: {
      current: 1,
      pageSize: 15,
    },
    loading: false,
  };

  componentDidMount() {
    const { pagination } = this.state;
    this.fetch({ pagination });
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };

  //здесь происходит случайное наполнение таблицы - без этого у меня не получается наполнить своими данными
  fetch = (params = {}) => {
    this.setState({ loading: true });
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      type: 'json',
      data: getRandomuserParams(params),
    }).then(data => {
      console.log(data);
      this.setState({
        loading: false,
        data: data.results,
        pagination: {
          ...params.pagination,
          total: 200,
          // 200 is mock data, you should read it from server
          // total: data.totalCount,
        },
      });
    });
  };

  render() {
    const { data, pagination, loading } = this.state;
    return (
      <Table
        columns={columns3}
        //rowKey={record => record.login.uuid}
        dataSource={data3}
        pagination={pagination}
        loading={loading}
        onChange={this.handleTableChange}
        title={() => 'Табличка с выбором количества строк на странице'}
      />
    );
  }
}

const originData = [
  {
    key: '1',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: '	T>0.1 and M1>0 and (M1-M2)/M1>0.04 and M1-M2>0.01',
    type: 'Предупреждение',
    discription: 'Утечка >4%',
  },
{
    key: '2',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: 'Tmax>0.1 and Tmax<0.5',
    type: 'Предупреждение',
    discription: 'Завышение расхода >6 мин',
  },
  {
    key: '3',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: 'Tmax>0.5',
    type: 'Авария',
    discription: 'Завышение расхода >30 мин',
  },
  {
    key: '4',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: 'Terr>0.001',
    type: 'Авария',
    discription: 'Остановка счета: неисправность прибора',
  },
   {
    key: '5',
    type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: '1004/029',
    condition: 'm1-m2>1000',
    type: 'Авария',
    discription: 'Контроль утечки',
  },
   {
    key: '6',
    type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: '0737/356',
    condition: 'Т2>(Т1/2)',
    type: 'НС',
    discription: 'Завышение температуры',
  },
   {
    key: '7',
    type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: '0806/161',
    condition: 't1>80',
    type: 'Сообщение',
    discription: 'Контроль температуры',
  },
  {
    key: '8',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: '	T>0.1 and M1>0 and (M1-M2)/M1>0.04 and M1-M2>0.01',
    type: 'Предупреждение',
    discription: 'Утечка >4%',
  },
{
    key: '9',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: 'Tmax>0.1 and Tmax<0.5',
    type: 'Предупреждение',
    discription: 'Завышение расхода >6 мин',
  },
  {
    key: '10',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: 'Tmax>0.5',
    type: 'Авария',
    discription: 'Завышение расхода >30 мин',
  },
  {
    key: '11',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: 'Terr>0.001',
    type: 'Авария',
    discription: 'Остановка счета: неисправность прибора',
  },
   {
    key: '12',
    type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: '1004/029',
    condition: 'm1-m2>1000',
    type: 'Авария',
    discription: 'Контроль утечки',
  },
   {
    key: '13',
    type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: '0737/356',
    condition: 'Т2>(Т1/2)',
    type: 'НС',
    discription: 'Завышение температуры',
  },
   {
    key: '14',
    type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: '0806/161',
    condition: 't1>80',
    type: 'Сообщение',
    discription: 'Контроль температуры',
  },
];

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
  }) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Пожалуйста, заполните ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};


//табличка с редактируемой строкой
const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Ошибка:', errInfo);
    }
  };



  const columns = [
     {
      title: '',
      dataIndex: 'operation',
      align: 'center',
      width: 25,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Сохранить
            </a>
            <Popconfirm title="Отменить?" onConfirm={cancel}>
              <a>Отмена</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            <Tooltip placement="top" title={'Редактировать'}><Button shape="circle" icon={<EditTwoTone />} /></Tooltip>
          </Typography.Link>
        );
      },
    },
    {
      dataIndex:'delete',
      key:'delete',
      align: 'center',
      width: 25,
      //  render: (_, record) =>
      //     this.state.dataSource.length >= 1 ? (
      //       <Popconfirm title="Удалить запись?" onConfirm={() => this.handleDelete(record.key)}>
      //         <Tooltip placement="top" title={'Удалить'}><Button shape="circle" icon={<DeleteTwoTone />} /></Tooltip>
      //       </Popconfirm>
      //     ) : null,

      render: record => 
                <Space size="middle">
                  <Tooltip placement="top" title={'Удалить'}><Button shape="circle" onClick={showConfirm} icon={<DeleteTwoTone />} /></Tooltip>
                </Space>
          
    },
    
    {
      title: '',
      dataIndex: 'type_condition',
      align: 'center',
      width: 25,
    },

    {
      title: 'Группа/ТУ',
      dataIndex: 'group_tu',
      key:'group_tu',
      sorter: true,
      width: 70,
      sorter: (a, b) => sorter(a.group_tu, b.group_tu),
      sortDirections: ['descend', 'ascend'],
    },

    {
      title: 'Условие',
      dataIndex: 'condition',
      key: 'condition',
      width: 400,
      sorter: (a, b) => sorter(a.condition, b.condition),
      sortDirections: ['descend', 'ascend'],
      editable: true,
    },
    {
      title: 'Тип',
      dataIndex: 'type',
      key: 'type',
      width: 70,
      sorter: true,
      sorter: (a, b) => sorter(a.type, b.type),
      sortDirections: ['descend', 'ascend'],
      editable: true,
  
    },
    {
      title: 'Описание',
      dataIndex: 'discription',
      key:'discription',
      sorter: true,
      sorter: (a, b) => sorter(a.discription, b.discription),
      sortDirections: ['descend', 'ascend'],
      editable: true,
    }, 

  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        title={() => 'Табличка с редактируемой строкой'}
        width={1000}
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};


//Табличка с удаляемой строкой
const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const DeleteableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Ошибка:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} требуется.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

class DeleteableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
      title: '',
      dataIndex: 'edit',
      align: 'center',
      width: 25,
      render: record => 
              <Space size="middle">
              <Popconfirm placement="right" title={'Вы действительно хотите удалить данное оповещение?'} onConfirm={confirmPopConf} okText="Да" cancelText="Нет">
              <Button shape="circle" icon={<EditTwoTone />} />
              </Popconfirm>
            
            </Space>
    },
    {
      dataIndex:'delete',
      key:'delete',
      align: 'center',
      width: 25,
      render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Удалить данное условие?" onConfirm={() => this.handleDelete(record.key)}>
              <Button shape="circle" icon={<DeleteTwoTone />} />
            </Popconfirm>
          ) : null,
         
    },
    {
      title:'',
      dataIndex: 'type_condition',
      align: 'center',
      width: 25,
      sorter: true,
      filters: [
        { text: <WarningTwoTone twoToneColor="#eb2f96" style={{ fontSize: '20px'}} />, value: 'info_icon' },
        { text: <InfoCircleTwoTone twoToneColor="#fadb14" style={{ fontSize: '20px'}} />, value: 'error_icon' },
        { text: <CheckCircleTwoTone  twoToneColor="#52c41a" style={{ fontSize: '20px'}} />, value: 'ok_icon' },
        { text: <StopTwoTone twoToneColor="#eb2f96" style={{ fontSize: '20px'}} />, value: 'fatal_icon' },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
    // {
    //   title: '',
    //   dataIndex: 'type_condition',
    //   align: 'center',
    //   width: 25,
    // },

    {
      title: 'Группа/ТУ',
      dataIndex: 'group_tu',
      key:'group_tu',
      sorter: true,
      width: 70,
      sorter: (a, b) => sorter(a.group_tu, b.group_tu),
      sortDirections: ['descend', 'ascend'],
    },

    {
      title: 'Условие',
      dataIndex: 'condition',
      key: 'condition',
      width: 400,
      sorter: (a, b) => sorter(a.condition, b.condition),
      sortDirections: ['descend', 'ascend'],
      editable: true,
    },
    {
      title: 'Тип',
      dataIndex: 'type',
      key: 'type',
      width: 70,
      sorter: true,
      sorter: (a, b) => sorter(a.type, b.type),
      sortDirections: ['descend', 'ascend'],
      editable: true,
  
    },
    {
      title: 'Описание',
      dataIndex: 'discription',
      key:'discription',
      sorter: true,
      sorter: (a, b) => sorter(a.discription, b.discription),
      sortDirections: ['descend', 'ascend'],
      editable: true,
    },
      // {
      //   title: 'operation',
      //   dataIndex: 'operation',
      //   render: (_, record) =>
      //     this.state.dataSource.length >= 1 ? (
      //       <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
      //         <a>Delete</a>
      //       </Popconfirm>
      //     ) : null,
      // },
    ];
    this.state = {
      dataSource: [
       {
          key: '1',
          type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: 'ДОГОВОР',
          condition: '	T>0.1 and M1>0 and (M1-M2)/M1>0.04 and M1-M2>0.01',
          type: 'Предупреждение',
          discription: 'Утечка >4%',
        },
        {
          key: '2',
          type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: 'ДОГОВОР',
          condition: 'Tmax>0.1 and Tmax<0.5',
          type: 'Предупреждение',
          discription: 'Завышение расхода >6 мин',
        },
        {
          key: '3',
          type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: 'ДОГОВОР',
          condition: 'Tmax>0.5',
          type: 'Авария',
          discription: 'Завышение расхода >30 мин',
        },
        {
          key: '4',
          type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: 'ДОГОВОР',
          condition: 'Terr>0.001',
          type: 'Авария',
          discription: 'Остановка счета: неисправность прибора',
        },
        {
          key: '5',
          type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: '1004/029',
          condition: 'm1-m2>1000',
          type: 'Авария',
          discription: 'Контроль утечки',
        },
        {
          key: '6',
          type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: '0737/356',
          condition: 'Т2>(Т1/2)',
          type: 'НС',
          discription: 'Завышение температуры',
        },
        {
          key: '7',
          type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: '0806/161',
          condition: 't1>80',
          type: 'Сообщение',
          discription: 'Контроль температуры',
        },
        {
          key: '8',
          type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: 'ДОГОВОР',
          condition: '	T>0.1 and M1>0 and (M1-M2)/M1>0.04 and M1-M2>0.01',
          type: 'Предупреждение',
          discription: 'Утечка >4%',
        },
        {
          key: '9',
          type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: 'ДОГОВОР',
          condition: 'Tmax>0.1 and Tmax<0.5',
          type: 'Предупреждение',
          discription: 'Завышение расхода >6 мин',
        },
        {
          key: '10',
          type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: 'ДОГОВОР',
          condition: 'Tmax>0.5',
          type: 'Авария',
          discription: 'Завышение расхода >30 мин',
        },
        {
          key: '11',
          type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: 'ДОГОВОР',
          condition: 'Terr>0.001',
          type: 'Авария',
          discription: 'Остановка счета: неисправность прибора',
        },
        {
          key: '12',
          type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: '1004/029',
          condition: 'm1-m2>1000',
          type: 'Авария',
          discription: 'Контроль утечки',
        },
        {
          key: '13',
          type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: '0737/356',
          condition: 'Т2>(Т1/2)',
          type: 'НС',
          discription: 'Завышение температуры',
        },
        {
          key: '14',
          type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: '0806/161',
          condition: 't1>80',
          type: 'Сообщение',
          discription: 'Контроль температуры',
        },
      ],
      count: 14,
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: '32',
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };
  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (

        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
          title={() => 'Табличка с удаляемой строкой'}
        />

    );
  }
}

const dataCounterparty = [
  {
    key: '1',
    object: 'ООО Тест1',
    number: '1',
  },

  {
    key: '2',
    object: 'ООО Тест2',
    number: '2',
  },

  {
    key: '3',
    object: 'ООО Тест3',
    number: '3',
  },

  {
    key: '4',
    object: 'ООО Тест4',
    number: '4',
  },

  {
    key: '5',
    object: 'ООО Тест5',
    number: '5',
  },

  {
    key: '6',
    object: 'ООО Тест6',
    number: '6',
  },

  {
    key: '7',
    object: 'ООО Тест7',
    number: '7',
  },

  {
    key: '8',
    object: 'ООО Тест8',
    number: '8',
  },

  {
    key: '9',
    object: 'ООО Тест9',
    number: '9',
  },

  {
    key: '10',
    object: 'ООО Тест10',
    number: '10',
  },


];

const columnsCounterparty = [
  {
    title: '№',
    dataIndex: 'number',
    key:'number',
    width: 40,
  },
  
  {
    dataIndex:'edit',
    key:'edit',
    width: 50,
    render: record => 
              <Space size="middle">
              <Popconfirm placement="right" title={'Вы действительно хотите удалить данное оповещение?'} onConfirm={confirmPopConf} okText="Да" cancelText="Нет">
              <Button shape="circle" icon={<EditTwoTone />} />
              </Popconfirm>
            
            </Space>
        
  },
  {
    title: <Space size="middle">
    <Button shape="circle" onClick={showConfirm} icon={<DeleteTwoTone />} />
    </Space>,
    dataIndex:'delete',
    key:'delete',
    width: 50,
    render: record => 
              <Space size="middle">
                <Button shape="circle" onClick={showConfirm} icon={<DeleteTwoTone />} />
              </Space>
        
  },


  {
    title: 'Контрагент',
    dataIndex: 'object',
    key: 'object',
    width: 200,
    sorter: (a, b) => sorter(a.object, b.object),
    sortDirections: ['descend', 'ascend'],
    
  },

];


//Справочник контрагентов
class ModalCounterparty extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };
render() {
  return (
    <>

      <Button onClick={this.showModal} type="primary" shape="round" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}
               icon={<FileDoneOutlined style={{
                  color: 'white',
                  backgroundColor: '#0c569b'}} />}>
                  Справочник контрагентов
      </Button>

      {/* <Button shape="circle"
        onClick={this.showModal}
        icon={<PlusCircleTwoTone twoToneColor="#52c41a" />}
      /> */}

      <Modal
        title="Контрагенты"
        visible={this.state.visible}
        onOk={this.hideModal}
        onCancel={this.hideModal}
        okText="Выбрать"
        cancelText="Отмена"
      >
           <div className="site-input-group-wrapper">
            <Input.Group size="large">
            <Space direction="vertical" size="large">
              <Space direction="gorisontal" size="large">
                <Button type="primary" color="#0c569b"
                      style={{
                  //   color: 'white',
                      backgroundColor: '#0c569b',
                      underlayColor:'#0c569b',
                      }}>
                          Добавить
                  </Button>
                  <Button type="primary" color="#0c569b"
                      style={{
                  //   color: 'white',
                      backgroundColor: '#0c569b',
                      underlayColor:'#0c569b',
                      }}>
                          Изменить
                  </Button>
                  <Button type="primary" color="#0c569b"
                      style={{
                  //   color: 'white',
                      backgroundColor: '#0c569b',
                      underlayColor:'#0c569b',
                      }}>
                          Удалить
                  </Button>
                  <Button icon={<SearchOutlined />}>Поиск</Button>
                  </Space>
              <Table
                columns={columnsCounterparty}
                dataSource={dataCounterparty}
                bordered
         // title={() => 'Условия контрорля'}
          //sticky
                //pagination={{ pageSize: 6 }}
                scroll={{ y: 240 }}
          //footer={() => 'Footer'}
              />    
          </Space>           
            </Input.Group>
          </div>
          
      </Modal>
    </>
  );
}
}

const dataTariff = [
  {
    key: '1',
    object: 'Учёт',
    number: '1',
    price:'980',
  },

  {
    key: '2',
    object: 'Базовый',
    number: '2',
    price:'1500',
  },

  {
    key: '3',
    object: 'Контроль',
    number: '3',
    price:'2000',
  },

  {
    key: '4',
    object: 'Контроль +',
    number: '4',
    price:'4000',
  },

];

const columnsTariff = [
  {
    title: '№',
    dataIndex: 'number',
    key:'number',
    width: 40,
  },
  
  {
    dataIndex:'edit',
    key:'edit',
    width: 50,
    render: record => 
              <Space size="middle">
              <Popconfirm placement="right" title={'Вы действительно хотите удалить данное оповещение?'} onConfirm={confirmPopConf} okText="Да" cancelText="Нет">
              <Button shape="circle" icon={<EditTwoTone />} />
              </Popconfirm>
            
            </Space>
        
  },
  {
    title: <Space size="middle">
    <Button shape="circle" onClick={showConfirm} icon={<DeleteTwoTone />} />
    </Space>,
    dataIndex:'delete',
    key:'delete',
    width: 50,
    render: record => 
              <Space size="middle">
                <Button shape="circle" onClick={showConfirm} icon={<DeleteTwoTone />} />
              </Space>
        
  },


  {
    title: 'Тариф',
    dataIndex: 'object',
    key: 'object',
    width: 100,
    sorter: (a, b) => sorter(a.object, b.object),
    sortDirections: ['descend', 'ascend'],
    
  },

  {
    title: 'Цена',
    dataIndex: 'price',
    key: 'price',
    width: 90,
    sorter: (a, b) => sorter(a.object, b.object),
    sortDirections: ['descend', 'ascend'],
    
  },

];



//Справочник тарифов
class ModalTariff extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
  return (
    <>

      <Button onClick={this.showModal} type="primary" shape="round" color="#0c569b"
              style={{
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}
               icon={<FileDoneOutlined style={{
                  color: 'white',
                  backgroundColor: '#0c569b'}} />}>
                  Справочник тарифов
      </Button>

      <Modal
        title="Тарифы"
        visible={this.state.visible}
        onOk={this.hideModal}
        onCancel={this.hideModal}
        okText="Выбрать"
        cancelText="Отмена"
      >
           <div className="site-input-group-wrapper">
            <Input.Group size="large">
            <Space direction="vertical" size="large">
              <Space direction="gorisontal" size="large">
                <Button type="primary" color="#0c569b"
                      style={{
                  //   color: 'white',
                      backgroundColor: '#0c569b',
                      underlayColor:'#0c569b',
                      }}>
                          Добавить
                  </Button>
                  <Button type="primary" color="#0c569b"
                      style={{
                  //   color: 'white',
                      backgroundColor: '#0c569b',
                      underlayColor:'#0c569b',
                      }}>
                          Изменить
                  </Button>
                  <Button type="primary" color="#0c569b"
                      style={{
                  //   color: 'white',
                      backgroundColor: '#0c569b',
                      underlayColor:'#0c569b',
                      }}>
                          Удалить
                  </Button>
                  <Button icon={<SearchOutlined />}>Поиск</Button>
                  </Space>
              <Table
                columns={columnsTariff}
                dataSource={dataTariff}
                bordered
         // title={() => 'Условия контрорля'}
          //sticky
                //pagination={{ pageSize: 6 }}
                scroll={{ y: 240 }}
          //footer={() => 'Footer'}
              />    
          </Space>           
            </Input.Group>
          </div>
          
      </Modal>
    </>
  );
}
}

const dataBill = [
  {
    key: '1',
    number: '1',
    bill_num: '285',
    discription: '1кв21',
    date:'20.01,2021',
    total:'4500',
    Status:'Оплачен',
  },
  {
    key: '2',
    number: '2',
    bill_num: '560',
    discription: '2кв21',
    date:'03.04,2021',
    total:'4500',
    Status:'Оплачен',
  },
  {
    key: '3',
    number: '3',
    bill_num: '607',
    discription: '3кв21',
    date:'03.07,2021',
    total:'4500',
    Status:'Оплачен',
  },
  {
    key: '4',
    number: '4',
    bill_num: '711',
    discription: '4кв21',
    date:'02.10,2021',
    total:'4500',
    Status:'Оплачен',
  },
  

];

const columnsBill = [
  {
    title: '№',
    dataIndex: 'number',
    key:'number',
    width: 30,
  },
  
  {
    dataIndex:'edit',
    key:'edit',
    width: 30,
    render: record => 
              <Space size="middle">
              <Popconfirm placement="right" title={'Вы действительно хотите удалить данное оповещение?'} onConfirm={confirmPopConf} okText="Да" cancelText="Нет">
              <Button shape="circle" icon={<EditTwoTone />} />
              </Popconfirm>
            
            </Space>
        
  },
  {
    title: <Space size="middle">
    <Button shape="circle" onClick={showConfirm} icon={<DeleteTwoTone />} />
    </Space>,
    dataIndex:'delete',
    key:'delete',
    width: 30,
    render: record => 
              <Space size="middle">
                <Button shape="circle" onClick={showConfirm} icon={<DeleteTwoTone />} />
              </Space>
        
  },

  {
    title: 'Номер',
    dataIndex: 'bill_num',
    key: 'bill_num',
    width: 60,
    sorter: (a, b) => sorter(a.bill_num, b.bill_num),
    sortDirections: ['descend', 'ascend'],
    
  },

  {
    title: 'discription',
    dataIndex: 'discription',
    key: 'discription',
    width: 100,
    sorter: (a, b) => sorter(a.discription, b.discription),
    sortDirections: ['descend', 'ascend'],
  },

  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
    width: 90,
    sorter: (a, b) => sorter(a.date, b.date),
    sortDirections: ['descend', 'ascend'],
  },

  {
    title: 'Сумма',
    dataIndex: 'total',
    key: 'total',
    width: 90,
    sorter: (a, b) => sorter(a.total, b.total),
    sortDirections: ['descend', 'ascend'],
  },

  {
    title: 'Статус',
    dataIndex: 'Status',
    key: 'Status',
    width: 90,
    sorter: (a, b) => sorter(a.Status, b.Status),
    sortDirections: ['descend', 'ascend'],
  },

];

//Справочник Счета
class ModalBill extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
  return (
    <>

      <Button onClick={this.showModal} type="primary" shape="round" color="#0c569b"
              style={{
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}
               icon={<FileTextOutlined style={{
                  color: 'white',
                  backgroundColor: '#0c569b'}} />}>
                  Счета
      </Button>

      <Modal
        title="Счёт на оплату по договору"
        visible={this.state.visible}
        onOk={this.hideModal}
        onCancel={this.hideModal}
        width={1000}
        okText="Выбрать"
        cancelText="Отмена"
      >
           <div className="site-input-group-wrapper">
            <Input.Group size="large">
            <Space direction="vertical" size="large">
              <Space direction="gorisontal" size="large">
                <Button type="primary" color="#0c569b"
                      style={{
                  //   color: 'white',
                      backgroundColor: '#0c569b',
                      underlayColor:'#0c569b',
                      }}>
                          Добавить
                  </Button>
                  <Button type="primary" color="#0c569b"
                      style={{
                  //   color: 'white',
                      backgroundColor: '#0c569b',
                      underlayColor:'#0c569b',
                      }}>
                          Изменить
                  </Button>
                  <Button type="primary" color="#0c569b"
                      style={{
                  //   color: 'white',
                      backgroundColor: '#0c569b',
                      underlayColor:'#0c569b',
                      }}>
                          Удалить
                  </Button>
                  <Button icon={<SearchOutlined />}>Поиск</Button>
                  </Space>
              <Table
                columns={columnsBill}
                dataSource={dataBill}
                bordered
         // title={() => 'Условия контрорля'}
          //sticky
                //pagination={{ pageSize: 6 }}
                scroll={{ y: 240 }}
          //footer={() => 'Footer'}
              />    
          </Space>           
            </Input.Group>
          </div>
          
      </Modal>
    </>
  );
}
}


const dataStatistic1 = [
  {
    key: '1',
    object: 'Договоры',
    sum: '1500',
  },
  {
    key: '2',
    object: 'Абоненты',
    sum: '2000',
  },
];

const columnsStatistic1 = [
  {
    title: 'Договоры/Абоненты',
    dataIndex: 'object',
  },

  {
    title: 'Кол-во',
    dataIndex: 'sum',
 },
  
];

const dataStatistic2 = [
  {
    key: '1',
    tariff: 'Учёт',
    sum: '1500',
  },
  {
    key: '2',
    tariff: 'Базовый',
    sum: '2000',
  },
  {
    key: '3',
    tariff: 'Контроль',
    sum: '2000',
  },
  {
    key: '4',
    tariff: 'Контроль +',
    sum: '2000',
  },
];

const columnsStatistic2 = [
  {
    title: 'Тарифы',
    dataIndex: 'tariff',
  },

  {
    title: 'Кол-во',
    dataIndex: 'sum',
  },
  
];

//Справочник Статистика
class ModalStatistic extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
  return (
    <>

      <Button onClick={this.showModal} type="primary" shape="round" color="#0c569b"
              style={{
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}
               icon={<ReconciliationOutlined style={{
                  color: 'white',
                  backgroundColor: '#0c569b'}} />}>
                  Статистика
      </Button>

      <Modal
        title="Статистика"
        visible={this.state.visible}
        width={300}
        onOk={this.hideModal}
      >
           <div className="site-input-group-wrapper">
            <Input.Group size="large">
            <Space direction="vertical" size="large">          
              <Table
                style={{"borderWidth":"2px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}
                columns={columnsStatistic1}
                dataSource={dataStatistic1}
                size = 'small'
                bordered
                pagination={false}
              />
              <Table 
                style={{"borderWidth":"2px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}
                columns={columnsStatistic2}
                dataSource={dataStatistic2}
                size = 'small'
                bordered
                pagination={false}
                title={() => 'Статистика по тарифам'}
              />      
          </Space>           
            </Input.Group>
          </div>
          
      </Modal>
    </>
  );
}
}

const dataRequest = [
  {
    key: '1',
    number: '1',
    organization:'ООО Орг1',
    contact: 'Иванов И.И.',
    phone:'8-916-123-45-67',
    e_mail:'mail@yandex.ru',
    date:'20.01.2021',
    type:'Договор',
  },
  {
    key: '2',
    number: '2',
    organization:'ООО Орг2',
    contact: 'Петров И.И.',
    phone:'8-916-123-45-67',
    e_mail:'mail@yandex.ru',
    date:'20.05.2021',
    type:'Подключение прибора',
  },
  {
    key: '3',
    number: '3',
    organization:'ООО Орг3',
    contact: 'Сидоров И.И.',
    phone:'8-916-123-45-67',
    e_mail:'mail@yandex.ru',
    date:'20.07.2021',
    type:'Установка оборудования',
  },
  {
    key: '4',
    number: '4',
    organization:'ООО Орг4',
    contact: 'Соловьёв И.И.',
    phone:'8-916-123-45-67',
    e_mail:'mail@yandex.ru',
    date:'02.05.2021',
    type:'Договор',
  },
  {
    key: '5',
    number: '5',
    organization:'ООО Орг5',
    contact: 'Кабанов И.И.',
    phone:'8-916-123-45-67',
    e_mail:'mail@yandex.ru',
    date:'13.09.2021',
    type:'Установка оборудования',
  },
  {
    key: '6',
    number: '6',
    organization:'ООО Орг6',
    contact: 'Говоров И.И.',
    phone:'8-916-123-45-67',
    e_mail:'mail@yandex.ru',
    date:'07.12.2021',
    type:'Подключение приборов',
  },
  

];

const columnsRequest = [
  {
    title: '№',
    dataIndex: 'number',
    key:'number',
    width: 60,
  },
  
  {
    dataIndex:'edit',
    key:'edit',
    width: 60,
    render: record => 
              <Space size="middle">
              <Popconfirm placement="right" title={'Вы действительно хотите удалить данное оповещение?'} onConfirm={confirmPopConf} okText="Да" cancelText="Нет">
              <Button shape="circle" icon={<EditTwoTone />} />
              </Popconfirm>
            
            </Space>
        
  },
  {
    title: <Space size="middle">
    <Button shape="circle" onClick={showConfirm} icon={<DeleteTwoTone />} />
    </Space>,
    dataIndex:'delete',
    key:'delete',
    width: 60,
     render: record => 
              <Space size="middle">
                <Button shape="circle" onClick={showConfirm} icon={<DeleteTwoTone />} />
              </Space>
        
  },

  {
    title: 'Организация',
    dataIndex: 'organization',
    key: 'organization',
    sorter: (a, b) => sorter(a.organization, b.organization),
    sortDirections: ['descend', 'ascend'],
    
  },

  {
    title: 'Контактное лицо',
    dataIndex: 'contact',
    key: 'contact',
    sorter: (a, b) => sorter(a.contact, b.contact),
    sortDirections: ['descend', 'ascend'],
  },

  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
    sorter: (a, b) => sorter(a.date, b.date),
    sortDirections: ['descend', 'ascend'],
  },

  {
    title: 'e-mail',
    dataIndex: 'e_mail',
    key: 'e_mail',
    sorter: (a, b) => sorter(a.e_mail, b.e_mail),
    sortDirections: ['descend', 'ascend'],
  },

  {
    title: 'Телефон',
    dataIndex: 'phone',
    key: 'phone',
    sorter: (a, b) => sorter(a.phone, b.phone),
    sortDirections: ['descend', 'ascend'],
  },

  {
    title: 'Тип',
    dataIndex: 'type',
    key: 'type',
    sorter: (a, b) => sorter(a.type, b.type),
    sortDirections: ['descend', 'ascend'],
  },

  {
    title: 'Проверено',
    dataIndex: 'checked',
    key: 'checked',
    align: 'center',
    render: record => <Checkbox onChange={onChange} ></Checkbox>
  },


];

//Справочник Заявки
class ModalRequest extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
  return (
    <>

      <Button onClick={this.showModal} type="primary" shape="round" color="#0c569b"
              style={{
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}
               icon={<UserAddOutlined style={{
                  color: 'white',
                  backgroundColor: '#0c569b'}} />}>
                  Заявки
      </Button>

      <Modal
        title="Заявки на почту"
        visible={this.state.visible}
        onOk={this.hideModal}
        onCancel={this.hideModal}
        width={1500}
        okText="Выбрать"
        cancelText="Отмена"
      >
           <div className="site-input-group-wrapper">
            <Input.Group size="large">
            <Space direction="vertical" size="large">
              <Space direction="gorisontal" size="large">
                <Button type="primary" color="#0c569b"
                      style={{
                  //   color: 'white',
                      backgroundColor: '#0c569b',
                      underlayColor:'#0c569b',
                      }}>
                          Добавить
                  </Button>
                  <Button type="primary" color="#0c569b"
                      style={{
                  //   color: 'white',
                      backgroundColor: '#0c569b',
                      underlayColor:'#0c569b',
                      }}>
                          Изменить
                  </Button>
                  <Button type="primary" color="#0c569b"
                      style={{
                  //   color: 'white',
                      backgroundColor: '#0c569b',
                      underlayColor:'#0c569b',
                      }}>
                          Удалить
                  </Button>
                  <Button icon={<SearchOutlined />}>Поиск</Button>
                  </Space>
              <Table
                columns={columnsRequest}
                dataSource={dataRequest}
                bordered
         // title={() => 'Условия контрорля'}
          //sticky
                //pagination={{ pageSize: 6 }}
                scroll={{ y: 240 }}
          //footer={() => 'Footer'}
              />    
          </Space>           
            </Input.Group>
          </div>
          
      </Modal>
    </>
  );
}
}

//Редактирование договора
class ModalEditContract extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
  return (
    <>
       <Button type="primary" color="#0c569b"
                      style={{
                  //   color: 'white',
                      backgroundColor: '#0c569b',
                      underlayColor:'#0c569b',
                      }}>
                          Изменить
                  </Button>
      <Modal
        title="Редактирование договора"
        visible={this.state.visible}
        onOk={this.hideModal}
        onCancel={this.hideModal}
        width={1500}
        okText="Сохранить"
        cancelText="Отмена"
      >
           <div className="site-input-group-wrapper">
            <Input.Group size="small">
            <Space direction="vertical" size="large">
            <Input.Group size="small">
              <Space direction="vertical">
                <Space>
                  Номер
                  <Input size="small" placeholder="100" style={{ width: '70px'}} />
                </Space>
                <Space>
                  Дата
                  <Input size="small" placeholder="100" style={{ width: '70px'}} />
                </Space>
                <Space>
                  Контрагент
                  <Input size="small" placeholder="100" style={{ width: '70px'}} />
                </Space>
                <Space>
                  Тип оплаты
                  <Select defaultValue="Постоплата" size="small" onChange={handleChange}>
                      <Option value="post">Постоплата</Option>
                      <Option value="pred">Предоплата</Option>
                  </Select>
                </Space>
                <Space>
                  Период оплаты (мес.)
                  <Input size="small" placeholder="100" style={{ width: '70px'}} />
                </Space>
                <Space>
                  Период актов (мес.)
                  <Input size="small" placeholder="100" style={{ width: '70px'}} />
                </Space>
                <Space>
                  Пользователь сайта
                  <Input size="small" placeholder="100" style={{ width: '70px'}} />
                </Space>
                <Space>
                  Где договор
                  <Select defaultValue="у нас" size="small" onChange={handleChange}>
                    <Option value="me">у нас</Option>
                    <Option value="him">у заказчика</Option>
                    <Option value="no">не известно</Option>
                  </Select>
                </Space>
              </Space>
              </Input.Group>
              <Space direction="gorisontal" size="large">
                <Button type="primary" color="#0c569b"
                      style={{
                  //   color: 'white',
                      backgroundColor: '#0c569b',
                      underlayColor:'#0c569b',
                      }}>
                          Добавить
                  </Button>
                  <Button type="primary" color="#0c569b"
                      style={{
                  //   color: 'white',
                      backgroundColor: '#0c569b',
                      underlayColor:'#0c569b',
                      }}>
                          Изменить
                  </Button>
                  <Button type="primary" color="#0c569b"
                      style={{
                  //   color: 'white',
                      backgroundColor: '#0c569b',
                      underlayColor:'#0c569b',
                      }}>
                          Удалить
                  </Button>
                  <Button icon={<SearchOutlined />}>Поиск</Button>
                  </Space>
            <Table
              style={{"borderWidth":"2px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}} 
              columns={columns3}
              dataSource={data2}
              bordered
              title={() => 'Точки учёта'}
            />
          </Space>           
            </Input.Group>
          </div>
          
      </Modal>
    </>
  );
}
}

ReactDOM.render(
  <ConfigProvider locale={ruRU}>
    <Space direction="vertical" size="large">
      <Space size="large">
        <ModalCounterparty />
        <ModalTariff />
        <ModalBill />
        <ModalStatistic />
        <ModalRequest />
          
        {/* <Input placeholder="600" />   */}
      </Space>
      <Space direction="gorisontal" size="large">
      <Space direction="vertical" size="large"> 
      <Space direction="gorisontal" size="large">
       <Button type="primary" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}>
                  Новый договор
          </Button>
          <ModalEditContract />
          <Button type="primary" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}>
                  Удалить
          </Button>
          <Button>Excel</Button>
          <Button type="primary" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}>
                  Сформировать
          </Button>
        </Space>  
        <FilterSearch1 />
      </Space>
      <Space direction="vertical" size="large">
      <Button>Excel</Button>
      <FilterSearch2 />
      <Tabs onChange={callback} type="card">
        <TabPane tab="Счета" key="4">
        <Space direction="vertical" size="large">
        <Space direction="gorisontal" size="large">
        <Button type="primary" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}>
                  Добавить
          </Button>
          <Button type="primary" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}>
                  Изменить
          </Button>
          <Button type="primary" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}>
                  Удалить
          </Button>
          <Button>Excel</Button>
          </Space>
        <Table
          style={{"borderWidth":"2px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}
          columns={columns3}
          dataSource={data3}
          bordered
         // title={() => 'Условия контрорля'}
          //sticky
          pagination={{ pageSize: 10 }}

          //footer={() => 'Footer'}
        />
        </Space>
        </TabPane>
        <TabPane tab="Акты" key="5">
        <Space direction="vertical" size="large">
        <Space direction="gorisontal" size="large">
        <Button type="primary" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}>
                  Добавить
          </Button>
          <Button type="primary" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}>
                  Изменить
          </Button>
          <Button type="primary" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}>
                  Удалить
          </Button>
          <Button>Excel</Button>
          </Space>
        <Table
          style={{"borderWidth":"2px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}
          columns={columns4}
          dataSource={data4}
          bordered
         // title={() => 'Условия контрорля'}
          //sticky
          pagination={{ pageSize: 10 }}

          //footer={() => 'Footer'}
        />
        </Space>
        </TabPane>
      </Tabs>   
      </Space>
      </Space>
      {/* <Table
        columns={columns1}
        dataSource={data1}
        bordered
        title={() => 'Контроль по выбранным точкам учёта'}
        // pagination={{ pageSize: 5 }}
        //footer={() => 'Footer'}
      /> */}

      {/* <Table
        columns={columns2}
        dataSource={data2}
        bordered
        title={() => 'Сообщения контроля по всем точкам учёта'}
        onChange={onChange1}
      /> */}
  
   
   

      
    </Space>  
  

  <Tabs onChange={callback} type="card">
    <TabPane tab="Тест1" key="1">
    <Space direction="vertical" size="large">
      <Space size="large">
        <Button type="primary" shape="round" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}
               icon={<HistoryOutlined style={{
                  color: 'white',
                  backgroundColor: '#0c569b'}} />}>
                  Справочник контрагентов
          </Button>
          <Button type="primary" shape="round" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}
               icon={<HistoryOutlined style={{
                  color: 'white',
                  backgroundColor: '#0c569b'}} />}>
                  Справочник тарифов
          </Button>
          <Button type="primary" shape="round" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}
               icon={<HistoryOutlined style={{
                  color: 'white',
                  backgroundColor: '#0c569b'}} />}>
                  Счета
          </Button>
          <Button type="primary" shape="round" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}
               icon={<HistoryOutlined style={{
                  color: 'white',
                  backgroundColor: '#0c569b'}} />}>
                  Статистика
          </Button>
          <Button type="primary" shape="round" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}
               icon={<HistoryOutlined style={{
                  color: 'white',
                  backgroundColor: '#0c569b'}} />}>
                  Заявки
          </Button>
          
        {/* <Input placeholder="600" />   */}
      </Space>
      <Space direction="gorisontal" size="large">
      <Space direction="vertical" size="large"> 
      <Space direction="gorisontal" size="large">
       <Button type="primary" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}>
                  Новый договор
          </Button>
          <Button type="primary" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}>
                  Изменить
          </Button>
          <Button type="primary" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}>
                  Удалить
          </Button>
          <Button>Excel</Button>
          <Button type="primary" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}>
                  Сформировать
          </Button>
        </Space>  
        <FilterSearch1 />
      </Space>
      <Space direction="vertical" size="large">
      <Button>Excel</Button>
      <FilterSearch2 />
      <Tabs onChange={callback} type="card">
        <TabPane tab="Счета" key="4">
        <Space direction="vertical" size="large">
        <Space direction="gorisontal" size="large">
        <Button type="primary" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}>
                  Добавить
          </Button>
          <Button type="primary" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}>
                  Изменить
          </Button>
          <Button type="primary" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}>
                  Удалить
          </Button>
          <Button>Excel</Button>
          </Space>
        <Table
          columns={columns3}
          dataSource={data3}
          bordered
         // title={() => 'Условия контрорля'}
          //sticky
          pagination={{ pageSize: 10 }}

          //footer={() => 'Footer'}
        />
        </Space>
        </TabPane>
        <TabPane tab="Акты" key="5">
        <Space direction="vertical" size="large">
        <Space direction="gorisontal" size="large">
        <Button type="primary" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}>
                  Добавить
          </Button>
          <Button type="primary" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}>
                  Изменить
          </Button>
          <Button type="primary" color="#0c569b"
              style={{
          //   color: 'white',
               backgroundColor: '#0c569b',
               underlayColor:'#0c569b',
               }}>
                  Удалить
          </Button>
          <Button>Excel</Button>
          </Space>
        <Table
          columns={columns4}
          dataSource={data4}
          bordered
         // title={() => 'Условия контрорля'}
          //sticky
          pagination={{ pageSize: 10 }}

          //footer={() => 'Footer'}
        />
        </Space>
        </TabPane>
      </Tabs>   
      </Space>
      </Space>
      {/* <Table
        columns={columns1}
        dataSource={data1}
        bordered
        title={() => 'Контроль по выбранным точкам учёта'}
        // pagination={{ pageSize: 5 }}
        //footer={() => 'Footer'}
      /> */}

      {/* <Table
        columns={columns2}
        dataSource={data2}
        bordered
        title={() => 'Сообщения контроля по всем точкам учёта'}
        onChange={onChange1}
      /> */}
  
   
   

      
    </Space>  
    </TabPane>
    <TabPane tab="Тест2" key="2">
      <Space direction="vertical"> 
        <Space direction="vertical">
          <Space>
            <TreeSelect1 />
            <TreeSelect2 />
            <TreeSelect3 />
          </Space>
          <Button>Добавить условие</Button>
          <ModalСondition />
        </Space>
        <Space>
          {/* const columns = [
            {
              title: 'Группа/ТУ',
              dataIndex: 'group_tu',
              key:'group_tu',
              ...this.getColumnSearchProps('group_tu'),
            }
          ];
          return <Table columns={columns} dataSource={data3} />; */}
        {/* <App1 /> */}
        <Table
          columns={columns3}
          dataSource={data3}
          bordered
          title={() => 'Условия контрорля'}
          //sticky
          pagination={{ pageSize: 10 }}

          //footer={() => 'Footer'}
        />

        
      </Space>  
    </Space>
    </TabPane>
    <TabPane tab="tmp" key="3">
      <EditableTable />
      <DeleteableTable />
      <PaginationTab /> 
    </TabPane> 


  </Tabs>
  
  </ConfigProvider>,
  document.getElementById('container'),
  
);
