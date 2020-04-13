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

Ext.define('Traccar.view.dialog.PointOfInterest', {
    extend: 'Traccar.view.dialog.BaseEdit',

    requires: [
        'Traccar.view.UnescapedTextField',
        'Traccar.view.dialog.PointOfInterestController',
        'Traccar.view.ClearableComboBox'
    ],
    controller: 'pointOfInterest',



    title: Strings.sharedPointOfInterest,

    items: {
        xtype: 'form',
        items: [{
            xtype: 'fieldset',
            title: Strings.sharedRequired,
            items: [{
                xtype: 'unescapedTextField',
                name: 'name',
                fieldLabel: Strings.sharedName,
                allowBlank: false
            }, {
               xtype: 'clearableComboBox',
               name: 'geofence',
               fieldLabel: Strings.sharedGeofence,
               store: 'Geofences',
               queryMode: 'local',
               displayField: 'name',
               valueField: 'id'
            }, {
                xtype: 'unescapedTextField',
                name: 'phone',
                fieldLabel: Strings.sharedPhone,
                allowBlank: false
            }, {
                xtype: 'numberfield',
                reference: 'latitude',
                name: 'latitude',
                fieldLabel: Strings.positionLatitude,
                decimalPrecision: Traccar.Style.coordinatePrecision
            }, {
                xtype: 'numberfield',
                reference: 'longitude',
                name: 'longitude',
                fieldLabel: Strings.positionLongitude,
                decimalPrecision: Traccar.Style.coordinatePrecision
            }, {
                xtype: 'numberfield',
                reference: 'zoom',
                name: 'zoom',
                fieldLabel: Strings.serverZoom
            }]
        }]
    },

     buttons: [{
           text: Strings.mapShapePoint,
           glyph: 'xf21d@FontAwesome',
           handler: 'onPointClick'
        }, {
            glyph: 'xf041@FontAwesome',
            minWidth: 0,
            handler: 'getMapState',
            tooltip: Strings.sharedGetMapState,
            tooltipType: 'title'
        }, {
            xtype: 'tbfill'
        }, {
            glyph: 'xf00c@FontAwesome',
            tooltip: Strings.sharedSave,
            tooltipType: 'title',
            minWidth: 0,
            handler: 'onSaveClick'
        }, {
            glyph: 'xf00d@FontAwesome',
            tooltip: Strings.sharedCancel,
            tooltipType: 'title',
            minWidth: 0,
            handler: 'closeView'
        }]
});
