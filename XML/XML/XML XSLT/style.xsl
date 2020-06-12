<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <html>
    <body>
    <h2>Elokuva-lista</h2>
    <table border="1">
        <tr bgcolor="#9acd32">
            <th>Nimi</th>
            <th>Ohjaaja</th>
            <th>Julkaisuvuosi</th>
            <th>Genre</th>
            <th>Ikäraja</th>
        </tr>
        <xsl:for-each select="elokuvat/elokuva">
            <xsl:sort select="vuosi"/>
            <tr>
                <td><xsl:value-of select="nimi"/></td>
                <td><xsl:value-of select="ohjaaja"/></td>
                <td><xsl:value-of select="vuosi"/></td>
                <td><xsl:value-of select="genre"/></td>
                <td><xsl:value-of select="ikäraja"/></td>
            </tr>
        </xsl:for-each>
    </table>
    </body>
    </html>
</xsl:template>

</xsl:stylesheet>
