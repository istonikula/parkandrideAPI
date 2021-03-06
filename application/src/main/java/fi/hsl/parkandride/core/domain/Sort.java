package fi.hsl.parkandride.core.domain;

import static fi.hsl.parkandride.core.domain.Sort.Dir.ASC;

public class Sort {

    public static enum Dir { ASC, DESC }

    public String by;

    public Dir dir  = ASC;

    public Sort() {}

    public Sort(String by) {
        this.by = by;
    }

    public Sort(String by, Dir dir) {
        this.by = by;
        this.dir = dir;
    }

    public String getBy() {
        return by;
    }

    public void setBy(String by) {
        this.by = by;
    }

    public Dir getDir() {
        return dir;
    }

    public void setDir(Dir dir) {
        this.dir = dir;
    }
}
