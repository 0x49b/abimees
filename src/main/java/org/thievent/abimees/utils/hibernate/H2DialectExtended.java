package org.thievent.abimees.utils.hibernate;
import org.hibernate.dialect.H2Dialect;
import org.hibernate.dialect.identity.IdentityColumnSupport;

/**
 * Fix boolean queries with H2 2.1.210.
 *
 * @author Florian Thiévent
 */
public class H2DialectExtended extends H2Dialect {

    @Override
    public IdentityColumnSupport getIdentityColumnSupport() {
        return new H2IdentityColumnSupportExtended();
    }

    @Override
    public String toBooleanValueString(boolean bool) {
        return bool ? "TRUE" : "FALSE";
    }

}