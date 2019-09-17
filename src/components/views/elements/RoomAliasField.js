/*
Copyright 2019 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { _t } from '../../../languageHandler';
import React from 'react';
import PropTypes from 'prop-types';

export default function RoomAliasField(props) {
    return (
        <div className="mx_RoomAliasField">
            <span>#</span>
            <input type="text" placeholder={_t("e.g. my-room")} onChange={props.onChange} />
            <span>:{props.domain}</span>
        </div>
    );
}

RoomAliasField.propTypes = {
    domain: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};