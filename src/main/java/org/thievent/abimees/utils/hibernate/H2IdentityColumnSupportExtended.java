package org.thievent.abimees.utils.hibernate;

import org.hibernate.dialect.identity.H2IdentityColumnSupport;

/**
 * Fix insert queries with H2 2.1.210.
 *
 * @author Florian Thiévent
 */
public class H2IdentityColumnSupportExtended extends H2IdentityColumnSupport {

    @Override
    public String getIdentityInsertString() {
        return "default";
    }

}