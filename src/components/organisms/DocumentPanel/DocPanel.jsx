import React from 'react';
import CertificateBlock from '../CertificateBlock/CertificateBlock';
import EducationBlock from '../EducationBlock/EducationBlock';
import OrganizationBlock from '../OrganizationBlock/OrganizationBlock';
import Panel from '../Panel/Panel';
import PersonalProjectBlock from '../PersonalProjectBlock/PersonalProjectBlock';
import WorkBlock from '../WorkBlock/WorkBlock';

class DocPanel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pages: [
                {
                    parent: {},
                    child: [
                        {id: 1, status: true},
                        {id: 2, status: false},
                        {id: 3, status: false},
                        {id: 4, status: false},
                        {id: 5, status: false},
                    ]
                },
                {
                    parent: {},
                    child: [
                        {id: 2, status: false},
                        {id: 3, status: false},
                        {id: 1, status: false},
                        {id: 5, status: false},
                        {id: 4, status: false},
                    ]
                }
            ],
            block: {},
            isEditing: false,
            childId: 0
        }
        this.panelRef = React.createRef()
        this.onInputFieldChange = this.onInputFieldChange.bind(this);
        this.createNewContent = this.createNewContent.bind(this);
        this.updateBlockStatus = this.updateBlockStatus.bind(this);
        this.moveContentToNextBlock = this.moveContentToNextBlock.bind(this);
        this.setChildID = this.setChildID.bind(this);
    }
    onInputFieldChange(event, setValue, setIsHide) {
        const val = event.target.value;
        if(val !== ''){
            setIsHide(false);
            setValue(event.target.value);
        }
        else{
            setIsHide(true);
            setValue('');
        }
    }
    createNewContent(atIndex, contentList, setContentList) {
        //console.log('Going to create component at index: '+ atIndex)
        contentList.splice(atIndex + 1, 0, contentList.length)
        setContentList([...contentList])
    }
    moveContentToNextBlock(index){
        const {pages} = this.state;
        if(index >= pages.length - 1){
            pages.push({
                parent: {},
                child: []
            })
        }

        let lastCurrentContent = pages[index].child.pop();
        // console.log(lastCurrentContent)
        // console.log('page index:', index)
        // console.log('next page index:', index + 1)

        pages[index + 1].child.unshift(lastCurrentContent)
        // console.log('number of pages:', pages)

        this.setState({pages: pages})
    }
    updateBlockStatus(pageIndex, childIndex, status){
        const {pages, childId} = this.state
        if(childIndex < pages[pageIndex].child.length){
            if(pages[pageIndex].child[childIndex]){
                // console.log(pageIndex + "/" + childIndex + "/" + status)
                pages[pageIndex].child[childIndex].status = status
                // console.log(pages)
                this.setState({pages: [...pages]})
            }
        }
        console.log(childId)
        console.log(status)
        if(!status && childId > 0){
            console.log('yesss')
            this.setState({childId: 0});
        }
    }
    renderChildContent(pageIndex, childID, childIndex){
        switch(childID){
            case 1:
                return <EducationBlock 
                        key={childIndex} 
                        pageIndex={pageIndex}
                        childID={childID}
                        childIndex={childIndex} 
                        onInputFieldChange={this.onInputFieldChange} 
                        createNewContent={this.createNewContent}
                        updateBlockStatus={this.updateBlockStatus}/>
            case 2:
                return <WorkBlock 
                        key={childIndex} 
                        pageIndex={pageIndex}
                        childID={childID}
                        childIndex={childIndex} 
                        onInputFieldChange={this.onInputFieldChange} 
                        createNewContent={this.createNewContent}
                        updateBlockStatus={this.updateBlockStatus}/>
            case 3:
                return <OrganizationBlock 
                        key={childIndex} 
                        pageIndex={pageIndex}
                        childID={childID}
                        childIndex={childIndex}  
                        onInputFieldChange={this.onInputFieldChange} 
                        createNewContent={this.createNewContent}
                        updateBlockStatus={this.updateBlockStatus}/>
            case 4:
                return <CertificateBlock 
                        key={childIndex} 
                        pageIndex={pageIndex}
                        childID={childID}
                        childIndex={childIndex} 
                        onInputFieldChange={this.onInputFieldChange} 
                        createNewContent={this.createNewContent}
                        updateBlockStatus={this.updateBlockStatus}/>
            case 5:
                return <PersonalProjectBlock 
                        key={childIndex} 
                        pageIndex={pageIndex}
                        childID={childID}
                        childIndex={childIndex} 
                        onInputFieldChange={this.onInputFieldChange} 
                        createNewContent={this.createNewContent}
                        updateBlockStatus={this.updateBlockStatus}/>
        }
    }
    setChildID(id){
        const {childId} = this.state
        // console.log(id)
        this.setState({childId: childId + 1});
    }
    render(){
        const {pages, childId} = this.state
        return(
            <div className="document">
            {pages && pages.map((page, pageIndex) => (
                <div 
                key={pageIndex} 
                ref={el => {
                    if (!el) return;
                    // console.log(childId)
                    if(el.offsetHeight > 1100){
                        if(childId <= 0){
                            this.moveContentToNextBlock(pageIndex)
                        }
                    }
                }
            }>
                <Panel pageIndex={pageIndex}>
                    {page.child && (
                        page.child.map((child, childIndex) => {
                            return(
                            <div 
                                key={childIndex}
                                onClick={() => this.setChildID(child.id)}
                            >
                            {this.renderChildContent(pageIndex, child.id, childIndex)}
                        </div>
                        )})
                    )}
                </Panel>
                </div>
            ))}
            </div>
        )
    }
}

export default DocPanel;