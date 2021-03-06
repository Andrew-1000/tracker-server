/*
 * Copyright 2017 Anton Tananaev (anton@traccar.org)
 * Copyright 2017 Andrey Kunitsyn (andrey@traccar.org)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('Traccar.view.edit.PointsOfInterest', {
    extend: 'Traccar.view.GridPanel',
    xtype: 'pointsOfInterestView',

    requires: [
        'Traccar.view.edit.PointsOfInterestController',
        'Traccar.view.edit.Toolbar'
    ],

    controller: 'pointsofinterest',
//    store: 'PointsOfInterest',

    tbar: {
        xtype: 'editToolbar'
    },

    listeners: {
        selectionchange: 'onSelectionChange'
    },

    columns: {
        defaults: {
            flex: 1,
            minWidth: Traccar.Style.columnWidthNormal
        },
        items: [{
            text: Strings.sharedName
//            dataIndex: 'name',
//            filter: 'string'
        }, {
            text: Strings.commandPhone
//            dataIndex: 'phone',
//            filter: 'string'
        }, {
            text: Strings.positionLatitude
//            dataIndex: 'latitude',
//            filter: 'float'
        }, {
            text: Strings.positionLongitude
//            dataIndex: 'longitude',
//            filter: 'float'
        }]
    }
});
