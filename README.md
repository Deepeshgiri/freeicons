# FreeIcons

`freeicons` is a collection of React components for popular SVG icons. This library provides an easy way to include icons in your React applications, with full support for customization through props.

## Features

- **Easy Integration**: Import icons as React components.
- **Customizable**: Set `width`, `height` properties to style your icons.
- **Comprehensive Collection**: Includes a wide variety of icons.

## Installation

To add `freeicons` to your project, use npm or yarn:

```bash
npm install freeicons
# or
yarn add freeicons


Usage
Importing Icons
You can import individual icons directly into your components. Here’s how to use them:

jsx
Copy code
import { FiBankIcon, FiAddressIcon } from 'freeicons';

function App() {
  return (
    <div className="App">
      <FiBankIcon width="50" height="50" fill="blue" />
      <FiAddressIcon width="50" height="50" fill="red" />
    </div>
  );
}

export default App;
Available Icons
Here is a list of the available icons and their corresponding React components:

FiAddressIcon: Address icon
FiBankIcon: Bank icon
FiBusinessIcon: Business icon
FiCalendarIcon: Calendar icon
FiCellPhoneIcon: Cell phone icon
FiColumnChartIcon: Column chart icon
FiCompanyIcon: Company icon
FiComputerIcon: Computer icon
FiConversationIcon: Conversation icon
FiCreativityIcon: Creativity icon
FiDocumentIcon: Document icon
FiMailIcon: Mail icon
FiNetworkIcon: Network icon
FiNotifyIcon: Notify icon
FiPhotoIcon: Photo icon
FiPieChartIcon: Pie chart icon
FiSetUpIcon: Set up icon
FiThumbsUpIcon: Thumbs up icon
FiTrophyIcon: Trophy icon
FiUploadIcon: Upload icon
FiUserIcon: User icon
Customization
You can customize the icons using the following props:

width: Set the width of the icon (e.g., width="50").
height: Set the height of the icon (e.g., height="50").
fill: Set the color of the icon (e.g., fill="blue").
Example
Here’s an example of using some of the icons with custom styling:

jsx
Copy code
import React from 'react';
import { FiBankIcon, FiAddressIcon } from 'freeicons';

function App() {
  return (
    <div className="App">
      <FiBankIcon width="50" height="50" fill="blue" />
      <FiAddressIcon width="50" height="50" fill="red" />
    </div>
  );
}

export default App;
Contributing
If you want to contribute to this library, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
License
This project is licensed under the ISC License - see the LICENSE file for details.

Contact
For any questions or issues, please open an issue on the GitHub repository.