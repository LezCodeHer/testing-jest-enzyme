import React from 'react';
import { mount } from 'enzyme';
import CreateNewPost from '../components/CreateNewPost';


test ('title input update state title on change', () =>{
    const wrapper = mount(<CreateNewPost />);
    wrapper.find('[name="title"]').simulate('change', {target: {name: "title", value: 'test title'} });

    expect(wrapper.state().title).toContain('test title');
});

test ('textarea update state content on change', () => {
    const wrapper = mount(<CreateNewPost />);

    wrapper.find('textarea').simulate('change', {target: {name: "content", value: 'test content'} });
    
    //wrapper.setState
    //expect(newpost.state)('')
    //expect(wrapper.find('input')).toContain('title');
    expect(wrapper.state().content).toContain('test content');
   // expect(wrapper.state().content).toContain('test title');
});




/* test('Rendering an input box', () => {
    const inputBox = shallow(<InputBox />);
  
    inputBox.find('input').simulate('change', { target: { value: 'Jonas' } });
  
    expect(inputBox.find('h1').text()).toContain('Hello');
    expect(inputBox.find('input')).toHaveLength(1);
    expect(inputBox.state('inputValue')).toMatch('Jonas');
  });
 */

