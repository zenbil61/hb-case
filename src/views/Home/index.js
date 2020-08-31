import React , { useState, useEffect } from 'react';

import Select from 'ui/Form/Select';
import Dialog from 'ui/Dialog';
import Pagination from 'ui/Pagination';

import VoteItem from 'components/VoteItem';
import Header from 'components/Header';

import { filterConstant, globalConstant } from 'utils/constant'
import { voteService, filterService } from 'utils/dataHelper';
import { sortVote } from 'utils/sortHelper'
import { toast } from 'react-toastify';

import './index.scss'

const Home = () => {
  
  const votes = voteService.getData();
  const [dialogState, setDialogState] = useState({isVisible:false, data : {} });
  const [data, setData] = useState(votes || globalConstant.initialVotes);
  const [filter,setFilter] = useState(filterService.getFilter());

  useEffect(() => voteService.setData(data) ,[data]);
  useEffect(() => filterService.saveFilter(filter) ,[filter]);

  const sortData = value => {
    value = parseInt(value); 

    let newData = data.sort(sortVote());
    
    if(value === filterConstant.type.MostVoted) {
        newData = newData.reverse();
    } 
    setData([...newData]);
    setFilter(value);
  }

  const handleVote = ({ id, voteType }) => {
    const index = data.findIndex(x => x.id === id);
    const item = data[index];
    item.lastVoted = new Date().getTime();
    
    if (voteType === globalConstant.voteType.Down) {
      item.count--;
    } else {
      item.count++;
    }
    setData([...data]);

    if (filter) {
      sortData(filter);
    }
  }
  const handleDelete = (data) => {
    setDialogState({isVisible:true, data });
  }
  const handleDialogOk = ({id,name}) => {
     const index = data.findIndex(x => x.id === id);
     data.splice(index,1);
     setData([...data]);
     toast(`${name} REMOVED`);
  }
  const handleDialogClose = () => setDialogState({isVisible:false, data: {}});


  const templateEmptyRow = () => <h1> Empty Data </h1>;

  const templateVoteRow = (item,index) => (
        <VoteItem 
            {...item} 
            key={index} 
            upVote={({id}) => handleVote({ id, voteType: globalConstant.voteType.Up })} 
            downVote={({id}) => handleVote({ id, voteType: globalConstant.voteType.Down })} 
            deleteVote={handleDelete} 
        />
  );

  const TemplateDialog = ({name}) => (
    <div> 
      <div>Do you want to remove</div>
      <h2>{name}</h2>
    </div>
  );



  return (
      <div id="home" className="container">

        <Header to="/create" />

        <div className="line"></div>

        <Select 
          value={filter} 
          placeholder="Order By" 
          data={filterConstant.data} 
          onSelect={({target : { value }}) => sortData(value)}/>

 
        <div className="votes">
            <Pagination 
              pageSize={5}
              data={data}
              rowTemplate={templateVoteRow} 
              emptyTemplate={templateEmptyRow}
            />
        </div>

        <Dialog 
          onOk={handleDialogOk}
          onClose={handleDialogClose}
          content={<TemplateDialog {...dialogState.data} />}
          state={dialogState} 
        />
        
      </div> 
  );
}

export default Home;
