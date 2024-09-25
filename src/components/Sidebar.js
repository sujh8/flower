import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  padding: 20px;
  background-color: #f4f4f4;
  border-right: 1px solid #ddd;
`;

const SectionTitle = styled.h2`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 10px 0;
`;

const ContactInfo = styled.div`
  margin-top: 20px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SectionTitle>Categories</SectionTitle>
      <List>
        <ListItem>Birthday</ListItem>
        <ListItem>Funeral</ListItem>
        <ListItem>Roses</ListItem>
        <ListItem>Get Well</ListItem>
        <ListItem>Best Sellers</ListItem>
      </List>

      <SectionTitle>POLICIES</SectionTitle>
      <List>
        <ListItem>Terms & Conditions</ListItem>
        <ListItem>Substitution & Privacy Policy</ListItem>
        <ListItem>Delivery & Return Policy</ListItem>
      </List>

      <SectionTitle>Contact</SectionTitle>
      <List>
        <ListItem>Log in</ListItem>
        <ListItem>Flower Care</ListItem>
        <ListItem>About</ListItem>
      </List>

      <ContactInfo>
        <h3>Ruth's Roses</h3>
        <p>Ruth's Roses is a family-owned and operated business that has been building long-term relationships with the community for just over 25 years! Ruth has grown the business from a small-town flower shop to a nationally recognized florist because of her attention to detail and timely delivery.</p>
        
        <h4>Contacts</h4>
        <p>Phone: (844)-799-2245</p>
        <p>Hours: Monday-Friday 8AM - 8PM | Saturday 8AM - 5PM</p>
        <p>E-mail: <a href="mailto:service@ruthsroses.com">service@ruthsroses.com</a></p>
      </ContactInfo>
    </SidebarContainer>
  );
};

export default Sidebar;
