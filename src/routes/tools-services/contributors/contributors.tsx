import React from "react";
import { ContributorsList } from "./contributors-data";
import { Avatar, Col, Row, Tooltip, Typography } from "antd";
import { Link } from "react-router-dom";
const Contributors = () => {
    return (
        <section className={"h-full overflow-auto"}>
            <Typography.Title level={2}>Contributors</Typography.Title>
            <Row gutter={[6, 6]} className={"w-full"}>
                {ContributorsList.map((x) => (
                    <Col key={x.userId}>
                        <Link
                            to={`https://github.com/${x.name}`}
                            title={x.name}
                            target={"_blank"}
                        >
                            <Tooltip key={x.userId} title={x.name}>
                                <Avatar
                                    key={x.userId}
                                    alt={x.name}
                                    src={`https://avatars.githubusercontent.com/u/${x.userId}?s=64&v=4`}
                                    size={64}
                                />
                            </Tooltip>
                        </Link>
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default Contributors;
