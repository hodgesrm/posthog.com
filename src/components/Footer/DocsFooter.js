import React from "react"
import { Row, Col } from 'antd'

export function DocsFooter({ filename, title }) {
    return <div className='docs-footer'>
        <Row>
            <h3>Help and feedback</h3>
            If you need help on any of the above, feel free to create an issue on <a href='https://github.com/PostHog/posthog'>our repo</a>, or <a href='https://join.slack.com/t/posthogusers/shared_invite/enQtOTY0MzU5NjAwMDY3LTc2MWQ0OTZlNjhkODk3ZDI3NDVjMDE1YjgxY2I4ZjI4MzJhZmVmNjJkN2NmMGJmMzc2N2U3Yjc3ZjI5NGFlZDQ'>join our Slack</a> where a member of our team can assist you! Chances are that if you have a problem or question, someone else does too - so please don't hesitate to create a new issue or ask us a question :) <br />
            <Col span={12}>
                <strong>Docs</strong><br />
                <a href={'https://github.com/PostHog/posthog.com/tree/master/contents' + filename}>Edit this page</a><br />
                <a href={'https://github.com/PostHog/posthog.com/issues/new?title=Docs feedback on: ' + title + '&body=**Issue with: ' + filename + '**\n\n'}>Raise an issue</a> about this page<br />
            </Col>
            <Col span={12}>
                <strong>Community and support</strong><br />
                Join our <a href='https://join.slack.com/t/posthogusers/shared_invite/enQtOTY0MzU5NjAwMDY3LTc2MWQ0OTZlNjhkODk3ZDI3NDVjMDE1YjgxY2I4ZjI4MzJhZmVmNjJkN2NmMGJmMzc2N2U3Yjc3ZjI5NGFlZDQ'>Slack community</a><br />
                <a href='https://github.com/PostHog/posthog.com/issues/new'>Raise an issue about PostHog</a> in our repo<br />
                Add a <a href='https://github.com/PostHog/posthog/issues/new?assignees=&labels=enhancement&template=feature_request.md&title='>feature request</a><br />
                Email us at <a href='mailto:hey@posthog.com'>hey@posthog.com</a><br />
            </Col>
        </Row>

    </div>
}