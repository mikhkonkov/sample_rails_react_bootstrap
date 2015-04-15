/**@jsx React.DOM */

var TabbedArea = ReactBootstrap.TabbedArea;
var TabPane = ReactBootstrap.TabPane;

var TabbedAreaInstance = React.createClass({
  render: function() {
    return <TabbedArea defaultActiveKey={2}>
      <TabPane eventKey={1} tab='Tab 1'>TabPane 1 content</TabPane>
      <TabPane eventKey={2} tab='Tab 2'>TabPane 2 content</TabPane>
      <TabPane eventKey={3} tab='Tab 3'>TabPane 3 content</TabPane>
      <TabPane eventKey={4} tab='Tab 4'>TabPane 4 content</TabPane>
    </TabbedArea>
  }
});
