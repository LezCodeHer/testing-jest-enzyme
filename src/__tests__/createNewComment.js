import React from 'react';
import { mount } from 'enzyme';
import CreateNewComment from '../components/CreateNewComment';


test ('comment textarea update on change' , () =>{
    const wrapper = mount(<CreateNewComment />);
    wrapper.find('textarea').simulate('change', {target: {name: "comment", value:"test comment"} });

    expect(wrapper.state().comment).toContain('test comment');

});
    

