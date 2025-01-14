# --
# Copyright (C) 2001-2019 OTRS AG, https://otrs.com/
# --
# This software comes with ABSOLUTELY NO WARRANTY. For details, see
# the enclosed file COPYING for license information (GPL). If you
# did not receive this file, see https://www.gnu.org/licenses/gpl-3.0.txt.
# --

package TidyAll::Plugin::OTRS::SOPM::DocumentationPresent;

use strict;
use warnings;

use parent qw(TidyAll::Plugin::OTRS::Base);

sub validate_source {    ## no critic
    my ( $Self, $Code ) = @_;

    return if $Self->IsPluginDisabled( Code => $Code );
    return if $Self->IsFrameworkVersionLessThan( 3, 2 );

    my $DocumentationPresent = grep { $_ =~ m{doc/(?:de|en)/} } @TidyAll::OTRS::FileList;

    if ( !$DocumentationPresent ) {
        die __PACKAGE__ . "\nEvery OPM package needs to include documentation!";
    }
}

1;
