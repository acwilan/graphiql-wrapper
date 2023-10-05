import React, { useState } from 'react';
import { Button, Checkbox, Input } from '@fluentui/react-components';
import { MyGraphQlEndpoint, GraphiQlWrapper } from './GraphiQlWrapper';
import { Settings16Regular } from '@fluentui/react-icons';

const Home: React.FC = () => {

    const [ isOpenPanel, openPanel ] = useState(false);
    const [ title, setTitle ] = useState('');
    const [ baseUrl, setBaseUrl ] = useState('');
    const [ endpointIndex, setEndpointIndex ] = useState(0);
    const [ key, setKey ] = useState(0);

    const endpoints: MyGraphQlEndpoint[] = [
      {
        title: title,
        baseUrl: baseUrl
      },
    ];

    function saveEndpoint() {
      const endpoint = endpoints[endpointIndex];
      endpoint.title = title;
      endpoint.baseUrl = baseUrl
      setKey(key + 1);
      openPanel(false);
    }

    function cancelEdit() {
      const endpoint = endpoints[endpointIndex];
      setTitle(endpoint.title);
      setBaseUrl(endpoint.baseUrl);
      openPanel(false);
    }

    return (
      <>
            <Button
              icon={<Settings16Regular />}
              onClick={() => openPanel(true)}>Configure</Button>
            <Button
              onClick={saveEndpoint}
              disabled={!title || !baseUrl}
            >Save</Button>
            <Button onClick={() => cancelEdit()}>Cancel</Button>
                  <Input
                    placeholder='API name'
                    defaultValue={title}
                    required
                    onChange={(event, value) => setTitle(value.value)}
                    />
                  <Input
                    placeholder='API url'
                    defaultValue={baseUrl}
                    required
                    onChange={(event, value) => setBaseUrl(value.value)}
                    />
      <GraphiQlWrapper key={key} endpoints={endpoints} />
      </>);
}

export default Home;