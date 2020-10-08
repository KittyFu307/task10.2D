import React from 'react';
import ChoiceTask from './ChoiceTask'

import PictureTask from './PictureTask'
import DecisionTask from './DecisionTask'
import SetenceTask from './SetenceTask'
function Select(props){
    if(props.selectType == "ChoiceTask"){
        return <ChoiceTask />
    } else if(props.selectType == "DecisionTask"){
        return <DecisionTask />
    }else if(props.selectType == "SentenceTask"){
        return <SetenceTask />
    }else if(props.selectType == "PictureTask"){
        return <PictureTask />
    }
    else{
        return <div></div>
    }
}
export default Select