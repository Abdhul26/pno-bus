import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import PnoToCdm from '../Table/PnoToCdm'
import PnoToCudd from '../Table/PnoToCudd'
import CuddToPno from '../Table/CuddToPno'
import CdmToPno from '../Table/CdmToPno'

function TabComponent() {
  return (
    <Tabs
      defaultActiveKey='profile'
      id='justify-tab-example'
      className='mb-3'
      justify
    >
      <Tab eventKey='home' title='PNO to CDM'>
        <PnoToCdm />
      </Tab>
      <Tab eventKey='profile' title='CDM to PNO'>
        <CdmToPno />
      </Tab>
      <Tab eventKey='longer-tab' title='PNO to Cuddalore'>
        <PnoToCudd />
      </Tab>
      <Tab eventKey='contact' title='Cuddalore to PNO'>
        <CuddToPno />
      </Tab>
    </Tabs>
  )
}

export default TabComponent
