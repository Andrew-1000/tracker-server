package org.traccar.geofence;

import java.text.DecimalFormat;
import java.text.ParseException;

public class GeofencePoint extends GeofenceGeometry {
    private double centerLatitude;
    private double centerLongitude;

    public GeofencePoint() {
    }

    public GeofencePoint(String wkt) throws ParseException {
        fromWkt(wkt);
    }

    public GeofencePoint(double centerLatitude, double centerLongitude) {
        this.centerLatitude = centerLatitude;
        this.centerLongitude = centerLongitude;
    }

    @Override
    public boolean containsPoint(double latitude, double longitude) {
        return true;
    }

    @Override
    public String toWkt() {
        String wkt = "";
        wkt = "POINT (";
        wkt += String.valueOf(centerLatitude);
        wkt += " ";
        wkt += String.valueOf(centerLongitude);
        wkt += ")";
        return wkt;
    }

    @Override
    public void fromWkt(String wkt) throws ParseException {
        if (!wkt.startsWith("POINT")) {
            throw new ParseException("Mismatch geometry type", 0);
        }
        String content = wkt.substring(wkt.indexOf("(") + 1, wkt.indexOf(")"));
        if (content == null || content.equals("")) {
            throw new ParseException("No content", 0);
        }
        String[] commaTokens = content.split(",");
        if (commaTokens.length != 1) {
            throw new ParseException("Not valid content", 0);
        }
        String[] tokens = commaTokens[0].split("\\s");
        if (tokens.length != 2) {
            throw new ParseException("Too much or less coordinates", 0);
        }
        try {
            centerLatitude = Double.parseDouble(tokens[0]);
        } catch (NumberFormatException e) {
            throw new ParseException(tokens[0] + " is not a double", 0);
        }
        try {
            centerLongitude = Double.parseDouble(tokens[1]);
        } catch (NumberFormatException e) {
            throw new ParseException(tokens[1] + " is not a double", 0);
        }
    }
}
